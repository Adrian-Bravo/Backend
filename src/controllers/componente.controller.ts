import { Request, Response } from "express";
import { Componente } from "../models/Componente";

export class ComponenteController {
    public index(req: Request, res: Response) {
        Componente.findAll({})
            .then((componentes: Array<Componente>) => res.json(componentes))
            .catch((err: Error) => res.status(500).json(err));
    }
}