import routerx from "express-promise-router";

import EmpleadoController from "../controllers/empleado.controllers";


const router=routerx();

router.post('/addEmpleado',EmpleadoController.addEmpleado);

export default router;