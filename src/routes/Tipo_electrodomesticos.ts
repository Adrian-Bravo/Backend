import { request, Response, Application } from "express";
import { Tipo_electrodomesticosController } from "../controllers/Tipo_electrodomesticos.controller";


export class Tipo_electrodomesticosRoutes {
    public tipo_electrodomesticosController: Tipo_electrodomesticosController = new Tipo_electrodomesticosController();
    
    public routes(app: Application): void {
        app.route('/tipo_electrodomesticos').get(this.tipo_electrodomesticosController.getTipo_electrodomesticos);
        app.route('/tipo_electrodomesticos/:id').get(this.tipo_electrodomesticosController.getOneTipo_electrodomestico);
        app.route('/tipo_electrodomesticos').post(this.tipo_electrodomesticosController.creaTipo_electrodomesticos);
        app.route('/tipo_electrodomesticos/:id').patch(this.tipo_electrodomesticosController.updateTipo_electrodomesticos);
        app.route('/borrartipo_electrodomesticos/:id').patch(this.tipo_electrodomesticosController.deleteTipo_electrodomesticos);
    }
}