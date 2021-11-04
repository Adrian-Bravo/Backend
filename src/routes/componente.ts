import { request, Response, Application } from "express";
import { ComponenteController } from "../controllers/componente.controller";

export class ComponenteRoutes {
    public componenteController: ComponenteController = new ComponenteController();
    
    public routes(app: Application): void {
        app.route('/componentes').get(this.componenteController.getComponente);
        app.route('/crearcomponente').post(this.componenteController.createComponente);
        app.route('/componente/:id').get(this.componenteController.getOneComponente);
        app.route('/componente/:id').patch(this.componenteController.updateComponente);
        app.route('/componente/:id').delete(this.componenteController.deleteComponente);
    }
}