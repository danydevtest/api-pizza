import routerx from "express-promise-router";

import EmpleadoController from "../controllers/empleado.controllers";
import empleadoControllers from "../controllers/empleado.controllers";


const router=routerx();

router.post('/addEmpleado',EmpleadoController.addEmpleado);
router.get("/getEmpleados",EmpleadoController.obtenerEmpleados);
router.get("/getEmpleado/:id",EmpleadoController.obtenerEmpleado);
router.delete("/deleteEmpleado/:id",EmpleadoController.deleteEmpleado);
router.patch("/updateEmpleado/:id", empleadoControllers.updateEmpleado);
export default router;