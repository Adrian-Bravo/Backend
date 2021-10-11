import{ Request,Response, Application} from "express"
import { FabricanteController } from "../controllers/Fabricante.controller";

export class FabricanteRoutes{
    public fabricanteController:FabricanteController = new FabricanteController();
    public routes(app: Application): void {
        app.route('/Fabricante').get(this.fabricanteController.index);
    }
}