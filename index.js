
import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import path from "path";


//importación de las rutas
import routes from "./routes";
import { log } from "console";

mongoose.Promise=global.Promise;
const dbUrl='mongodb://127.0.0.1:27017/pizza';
mongoose.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true})
.then(mongoose=>console.log('Conectado al servidor de BD en el puerto 27017'))
.catch(err=>console.log(err));

const app = express()
app.set('port', process.env.PORT || 4000)
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

//Rutas
app.use('/api',routes);

app.listen(app.get('port'),()=>{
  console.log("Servidor ejecutandose en el puerto: "+app.get('port'));
});