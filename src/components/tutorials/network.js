import { Router } from "express";
import * as Controller from "./controller"
const TutorialRoutes = Router()
TutorialRoutes.route("/").get(Controller.findAll);
TutorialRoutes.route("/").post(Controller.create)
export default TutorialRoutes;