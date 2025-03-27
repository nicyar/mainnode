import express from "express";
import { Router } from "express";
import router from "./router.js"

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api',router)
  
  app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
  });
  