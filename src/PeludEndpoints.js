import axios from 'axios';
import { PeludError } from './src/PeludError.js';
import endpoints from './src/endpoints.json';

/**
 * Crea los endpoints para interactuar con la API.
 * @param {string} baseURL - La URL base de la API.
 * @param {string} token - El token necesario para autenticar las solicitudes a la API.
 * @param {Object} endpoints - Un objeto que contiene los endpoints disponibles.
 * @param {string} category - La categoría de los endpoints.
 * @returns {Object} Un objeto con funciones asincrónicas para cada endpoint.
 */
export function createEndpoints(baseURL, token, endpoints, category) {
    const result = {};
    Object.keys(endpoints).forEach(endpoint => {
        result[endpoint] = async (params = '') => {
            try {
                const response = await axios.get(`${baseURL}${category}/${endpoint}`, {
                    params: { token, ...params }
                });

                if (response.data.error) throw new PeludError(response.data.error);

                const categoryMap = {
                    'animals': ['animal'],
                    'furry': ['fluff'],
                    'yiff': ['yiff'],
                    'text': ['text'],
                    'gen': {
                        'minecraftEmblem': ['imageURL', 'text'],
                        'qr': ['qrURL', 'text', 'class']
                    }
                };

                const endpointMap = categoryMap[category];
                if (endpointMap && endpointMap[endpoint]) {
                    const results = endpointMap[endpoint].map(key => response.data[key]);
                    return results.length === 1 ? results[0] : results;
                } else {
                    throw new PeludError("Categoría o endpoint desconocido");
                }
            } catch (error) {
                throw new PeludError("Error en la solicitud: " + error.message);
            }
        };
    });

    return result;
}

/**
 * Muestra la lista de todos los endpoints de forma ordenada.
 * @returns {string[]} Una lista de los endpoints disponibles.
 */
export function listEndpoints() {
    const categories = Object.keys(endpoints).sort();
    const sortedEndpoints = [];

    categories.forEach(category => {
        const categoryEndpoints = Object.keys(endpoints[category]).sort();
        categoryEndpoints.forEach(endpoint => {
            sortedEndpoints.push(`${category}/${endpoint}`);
        });
    });

    return sortedEndpoints;
}