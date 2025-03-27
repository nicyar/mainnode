import fs from "fs";

const usuarios = [
    {
        empresa: 'EjemploCorp',
        contactos: [
            {
                motivo: 'aprobado',
                nombre: 'Estimados',
                email: 'juan.perez@ejemplocorp.com;maria.rodriguez@ejemplocorp.com',
                departamento: 'Ventas',
                asunto: 'Consulta general',
                tipo: 'p'
            },
            {
                motivo:'tasa',
                nombre: 'María Rodríguez',
                email: 'maria.rodriguez@ejemplocorp.com',
                departamento: 'Soporte Técnico',
                asunto: 'Problema técnico',
                tipo:'s'
            }
        ]
    }
];

class Busqueda {
    constructor(usuarios) {
        this.usuarios = usuarios; 
        // Almacenar los usuarios en la instancia
    }

    buscarUsuarioPorMotivo(empresa, motivo) {
        const usuarioEncontrado = this.usuarios.find(usuario => usuario.empresa === empresa);
        if (usuarioEncontrado) {
            const contacto = usuarioEncontrado.contactos.find(contacto => contacto.motivo === motivo);
            
            if (contacto) {
                let mails= contacto.email; // Retorna el email del contacto encontrado
                let tipo= contacto.tipo;
                let nombre= contacto.nombre;
                let devolverModelo={"gmail":mails,"motivo":motivo,"tipo":tipo,"Nombre":nombre}
                
                return devolverModelo;
            } else {
                return "Contacto con ese motivo no encontrado";
            }
        } else {
            return "Empresa no encontrada";
        }
    }
    

}

const nuevo = new Busqueda(usuarios);
const resultado = nuevo.buscarUsuarioPorMotivo("EjemploCorp", "tasa"); // Buscar la propiedad "aprobado"

console.log(resultado); // Imprimirá el correo de aprobación de Ezequiel

export default Busqueda;