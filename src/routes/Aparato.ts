import { request, Response, Application } from "express";
import { AparatoController } from "../controllers/Aparato.controller";


export class AparatoRoutes {
    public aparatoController: AparatoController = new AparatoController();
    
    public routes(app: Application): void {
        app.route('/aparato').get(this.aparatoController.getAparato)
        app.route('/aparato/:id').get(this.aparatoController.getOneAparato)
        app.route('/aparato').post(this.aparatoController.creaAparato)
        app.route('/aparato/:id').patch(this.aparatoController.updateAparato)
          }
}