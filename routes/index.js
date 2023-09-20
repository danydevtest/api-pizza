import routerx from "express-promise-router";

import EmpleadoRoutes from "./empleado.routes";

const router=routerx();

router.use('/empleado',EmpleadoRoutes);

export default router;
