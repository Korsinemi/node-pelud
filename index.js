import { createEndpoints, listEndpoints } from './PeludEndpoints.js';
import endpoints from './src/endpoints.json';
import { PeludError } from './src/PeludError.js';

class PeludClient {
    constructor(token) {
        /**
        * @param {string} token Una clave para poder acceder a la API y obtener los datos :D
        * @throws {PeludError} - Si no se proporciona un token, se lanzará un error indicando que se necesita un token.
        */
        if (!token) throw new PeludError("Debes poner un token, por ejemplo [ PeludClient(\"TOKEN-PELUD\") ], o si te falta uno ve a mi server de Discord (https://korsinemi.link/discord/) en el canal \"PeludTokens\" de la categoria \"Apps\"!!");
        this.token = token;
        this.baseURL = 'https://peludapi.korsinemi.link';
        this.animals = createEndpoints(this.baseURL, this.token, endpoints.animals, 'v1/animals');
        this.furry = createEndpoints(this.baseURL, this.token, endpoints.furry, 'v1/furry');
        this.yiff = createEndpoints(this.baseURL, this.token, endpoints.yiff, 'v1/yiff');
        this.text = createEndpoints(this.baseURL, this.token, endpoints.text, 'v1/text');
    }

    /**
     * @returns {string[]} Muestra todos los endpoints disponibles.
     */
    static endpoints() {
        return listEndpoints();
    }
}

export { PeludClient };
