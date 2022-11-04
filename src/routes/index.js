import { TagsRoutes, TutorialRoutes } from "../components";

const listaRutas = [["/tags", TagsRoutes], ["/tutorials", TutorialRoutes]];

export const routes = (app) => {
    listaRutas.forEach(([path, controller]) => {
        app.use(path, controller)
    })
}