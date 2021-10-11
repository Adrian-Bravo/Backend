import { Request,Response } from "express";

import { Fabricante } from "../models/Fabricante";

export class FabricanteController{
    public index( req: Request, res:Response){
        Fabricante.findAll ({})
            .then((fabricantes: Array<Fabricante>) =>res.json(fabricantes))
            .catch((err: Error) => res.status(500).json(Error));

    }
}