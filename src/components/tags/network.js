import { Router } from "express";
import * as Controller from "./controller"
const TagsRoutes = Router();

TagsRoutes.route("/").get(Controller.findAll);
TagsRoutes.route("/").post(Controller.create);
export default TagsRoutes;