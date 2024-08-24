declare module 'PeludEndpoints' {
    export function createEndpoints(
        baseURL: string,
        token: string,
        endpoints: Record<string, string>,
        category: string
    ): Record<string, (params?: Record<string, any>) => Promise<any>>;

    export function listEndpoints(): string[];
}

declare module 'PeludError' {
    export class PeludError extends Error {
        constructor(message: string);
    }
}

declare module 'PeludClient' {
    import { createEndpoints, listEndpoints } from 'PeludEndpoints';
    import { PeludError } from 'PeludError';

    export class PeludClient {
        constructor(token: string);

        static listEndpoints(): string[];

        token: string;
        baseURL: string;
        animals: Record<string, (params?: Record<string, any>) => Promise<any>>;
        furry: Record<string, (params?: Record<string, any>) => Promise<any>>;
        lewdfurry: Record<string, (params?: Record<string, any>) => Promise<any>>;
        text: Record<string, (params?: Record<string, any>) => Promise<any>>;
        gen: Record<string, (params?: Record<string, any>) => Promise<any>>;
    }
}
