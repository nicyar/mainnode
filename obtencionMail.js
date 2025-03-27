import fs from "fs";

class BusquedaMails {
    constructor(file) {
        this.file = file; // Ruta del archivo .txt
    }

    async getMails(name) {
        try {
            // Leer el archivo .txt
            const read = await fs.promises.readFile(this.file, 'utf-8');
            const parseJson = JSON.parse(read); // Parsear el contenido como JSON

            // Buscar el objeto del mensaje por nombre (ej: "Aprobado", "Tasas", "Recordatorio")
            const mensaje = parseJson[name]; // Acceder directamente al objeto

            if (mensaje) {
                console.log(`Datos del mensaje "${name}":`, mensaje);
                return mensaje;
            } else {
                console.log(`El mensaje '${name}' no fue encontrado.`);
                return null;
            }
        } catch (error) {
            console.error("Error al leer el archivo o buscar el mensaje:", error.message);
            throw error;
        }
    }
}

// Ejemplo de uso
/* (async () => {
    try {
        const nuevo = new Busqueda("./modelos_mails.txt");

        // Buscar un mensaje por nombre (ej: "Aprobado", "Tasas", "Recordatorio")
        const nombreMensaje = "Aprobado"; // Cambia esto por el nombre del mensaje que desees buscar
        const resultado = await nuevo.getCompany(nombreMensaje);

        if (resultado) {
            console.log("Resultado de la búsqueda:");
            console.log("Asunto:", resultado.Asunto);
            console.log("Cuerpo Singular:", resultado.Cuerpo.Singular);
            console.log("Cuerpo Plural:", resultado.Cuerpo.Plural);

            // Personalizar el mensaje
            const empresa = "Mi Empresa";
            const periodo = "2023-10";
            const receptor = "Juan";
            const semana = "buena semana";

            const asuntoPersonalizado = resultado.Asunto
                .replace("${empresa}", empresa)
                .replace("${periodo}", periodo);

            const cuerpoSingularPersonalizado = resultado.Cuerpo.Singular
                .replace("${receptor}", receptor)
                .replace("${periodo}", periodo)
                .replace("${semana}", semana);

            console.log("\nMensaje personalizado:");
            console.log("Asunto:", asuntoPersonalizado);
            console.log("Cuerpo Singular:", cuerpoSingularPersonalizado);
        }
    } catch (error) {
        console.error("Error en el ejemplo de uso:", error.message);
    }
})();
 */
export default BusquedaMails;