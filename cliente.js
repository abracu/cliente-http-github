// Cliente HTTP

class Cliente {

    constructor(host, puerto, protocolo) {
        this.host = host;
        this.puerto = puerto;
        this.protocolo = protocolo;

    }

    // Funcion para procesar Header para mantener la sessio -> se realiza en la peticion o (Request)
    procesarHeader(req) {

        return req;

    }

    // Realizar peticiones de tipo GET (Obtener informacion)
    get(uri) {

    }

    post(uri, data) {

    }

}

module.exports = Cliente;