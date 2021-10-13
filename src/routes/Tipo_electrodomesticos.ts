import { request, Response, Application } from "express";
import { Tipo_electrodomesticosController } from "../controllers/Tipo_electrodomesticos.controller";


export class Tipo_electrodomesticosRoutes {
    public tipo_electrodomesticosController: Tipo_electrodomesticosController = new Tipo_electrodomesticosController();
    
    public routes(app: Application): void {
        app.route('/tipo_electrodomesticos').get(this.tipo_electrodomesticosController.index);
    }
}