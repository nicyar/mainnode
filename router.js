import { Router } from "express";

const router = Router();

router.get('/inicio',(req,res)=>{

    res.send('Bienvenido al envio de mails');

});



export default router;