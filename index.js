
import express from "express";
import cors from "cors";
import mongoose, { mongo } from "mongoose";
import path from "path";
import multer from "multer";
import {v4 as uuid} from "uuid";

//importación de las rutas
import routes from "./routes";

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

//Agregar imagenes al proyecto en la carpeta imagenes
const storage=multer.diskStorage({
  destination:(req,file,cb)=>{
      cb(null,'public/imagenes')
  },
  filename:(req,file,cb)=>{
      cb(null,uuid()+path.extname(file.originalname))
  }
});

app.use(multer({storage:storage}).single('image'));

//Rutas
app.use('/api',routes);

app.listen(app.get('port'),()=>{
  console.log("Servidor ejecutandose en el puerto: "+app.get('port'));
});