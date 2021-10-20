import { request, Response, Application } from "express";
import { ComponenteController } from "../controllers/componente.controller";

export class ComponenteRoutes {
    public componenteController: ComponenteController = new ComponenteController();
    
    public routes(app: Application): void {
        app.route('/componentes').get(this.componenteController.index);
        app.route('/crearcomponente').post(this.componenteController.createComponente);
    }
}