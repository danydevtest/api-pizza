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
    },
    obtenerEmpleados: async(req,res,next)=>{
        try {
           const consulta = await models.Empleado.find();
           res.json(consulta);
        } catch (error) {
            res.status(500).send({
                message:"Ocurrió un error al consultar"
            });
            next(error);
        }
    },

    obtenerEmpleado: async(req,res,next)=>{
        try {
                      
            const consultaOne= await models.Empleado.findById(req.params.id);
          if(!consultaOne){
            
            res.status(404).send({
                message:"Dato no encontrado"
                
            });
          }else{
           res.status(200).json(consultaOne);
          }
            
           
        } catch (error) {
            res.status(500).send({
                message:"Ocurrió un error al consultar el empleado"
            });
            next(error);
        }
    },
    deleteEmpleado: async(req,res,next)=>{
        try {
           await models.Empleado.findByIdAndDelete(req.params.id);
           res.status(200).send({
            message: "El empleado se ha eliminado correctamente"
           });
        } catch (error) {
            res.status(500).send({
                message:"Ocurrió un error al eliminar el empleado"
            });
            next(error);
        }
    },

    updateEmpleado: async(req,res,next)=>{
        try {
            const updateDatos=req.body;

            await models.Empleado.findByIdAndUpdate(req.params.id,updateDatos);
            res.status(200).send({
                message: "Datos actualizados correctamente"
            })
        } catch (error) {
            res.status(500).send({
                message:"Ocurrió un error al actualizar el empleado"
            });
            next(error);
        }
        }
    
}