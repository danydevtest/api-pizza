import mongoose,{Schema} from "mongoose";

const empleados=new Schema({
    nombre:String,
   correo:String,
    descripcion:String,
    createAd:{type:Date, default:Date.now}
});

const Empleado=mongoose.model('empleado',empleados);
export default Empleado;