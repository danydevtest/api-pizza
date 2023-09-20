import models from "../models";


export default{
    addEmpleado: async(req,res,next)=>{
        try {
            const {nombre,correo,descripcion}=req.body;

            const agregarEmpleado= new models.Empleado({
                nombre,
                correo,
                descripcion
            });

            const agregar=await agregarEmpleado.save();
            res.status(200).json(agregar);
            console.log(agregar);
        } catch (error) {
            res.status(500).send({
                message:"Ocurrió un error al guardar"
            });
            next(error);
        }
    }
}