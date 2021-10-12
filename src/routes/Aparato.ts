import { request, Response, Application } from "express";
import { AparatoController } from "../controllers/Aparato.controller";


export class AparatoRoutes {
    public aparatoController: AparatoController = new AparatoController();
    
    public routes(app: Application): void {
        app.route('/aparatos').get(this.aparatoController.index);
    }
}