import{ Request,Response, Application} from "express"
import { FabricanteController } from "../controllers/Fabricante.controller";

export class FabricanteRoutes{
    public fabricanteController:FabricanteController = new FabricanteController();
    public routes(app: Application): void {
        app.route('/fabricante').get(this.fabricanteController.createFabricante)
        // app.route('/fabricante/:id').get(this.fabricanteController.getOneFabricante)
        // app.route('/fabricante').post(this.fabricanteController.creaFabricante)
        // app.route('/fabricante/:id').patch(this.fabricanteController.updateFabricante)
        
    }
}
