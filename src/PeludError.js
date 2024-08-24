class PeludError extends Error {
    /**
    * @param {string} error Error en la función
    * @private
    */
    constructor(error) {
        super();
        this.name = "[⚠️] node-pelud Error > ";
        this.message = error;
    }
}

export { PeludError };