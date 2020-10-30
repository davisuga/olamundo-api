import { Router } from "express";
import userRoutes from "./controllers/User";
import lessonRoutes from "./controllers/Lesson";
import exerciseRoutes from "./controllers/Exercise";

const routes = Router();
routes.use('/user', userRoutes);
routes.use('/lesson', lessonRoutes);
routes.use('/exercise', exerciseRoutes);

export default routes;