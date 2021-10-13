import { ComponenteRoutes } from "./componente";
import { FabricanteRoutes } from './Fabricante';
import { Tipo_electrodomesticosRoutes} from './Tipo_electrodomesticos';
import {AparatoRoutes} from './Aparato';

export class Routes {
    public componenteRoutes: ComponenteRoutes = new ComponenteRoutes();
    public fabricanteRoutes: FabricanteRoutes= new FabricanteRoutes();
    public tipo_electrodomesticosRoutes: Tipo_electrodomesticosRoutes = new Tipo_electrodomesticosRoutes();
    public aparatoRoutes: AparatoRoutes = new AparatoRoutes();
}