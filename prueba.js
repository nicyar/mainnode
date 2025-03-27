import Busqueda from "./busquedaCliente.js";
import BusquedaMails from "./obtencionMail.js";
import { createTransport} from "nodemailer";


const Empresa = new Busqueda("./empresas.txt");
const Mails = new BusquedaMails("./modelos_mails.txt");
const TEST_MAIL = 'zula.willms89@ethereal.email'

const transporter = createTransport({
   host: 'smtp.ethereal.email',
   port: 587,
   auth: {
       user: TEST_MAIL,
       pass: 'FqUa3sUVQHpdgaYGJQ'
   }
});

/* try {
    const info = await transporter.sendMail(mailOptions)
    console.log(info)
 } catch (error) {
    console.log(err)
 } */
 
 


(async () => {
    try {
        const gmails = await Mails.getMails("Recordatorio");
        const company = await Empresa.getCompany("Parnor");

        if (company && gmails) {
            let cuerpoCorreo;

            if (company.Recordatorio.Persona === "Estimados") {
                cuerpoCorreo = gmails.Cuerpo.Plural;
            } else {
                cuerpoCorreo = gmails.Cuerpo.Singular;
            }

            console.log("Cuerpo del correo a enviar:");

            let asunto = gmails.Asunto.replace("${razonSocial}", company.Empresa).replace("${periodo}", "2023-11");
            cuerpoCorreo = cuerpoCorreo.replace("${nombre}", company.Recordatorio.Persona).replace("${periodo}", "2023-11").replace("${fechaVencimiento}", "30/11/2023");

            console.log("Asunto personalizado:", asunto);
            console.log("Cuerpo personalizado:", cuerpoCorreo);
            const mailOptions = {
                from: 'URBANA RUBRICA DIGITAL',
                to: TEST_MAIL,
                subject: asunto,
                html: cuerpoCorreo
            }
            const info = await transporter.sendMail(mailOptions)
            console.log(info)
        }
        
    } catch (error) {
        console.error("Error en el ejemplo de uso:", error.message);
    }
})();