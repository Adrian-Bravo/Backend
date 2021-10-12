import { Request, Response } from "express";
import {Tipo_electrodomesticos} from "../models/Tipo_electrodomesticos";

export class Tipo_electrodomesticosController {
    public index(req: Request, res: Response) {
        Tipo_electrodomesticos.findAll({})
            .then((Tipo_electrodomesticos: Array<Tipo_electrodomesticos>) => res.json(Tipo_electrodomesticos))
            .catch((err: Error) => res.status(500).json(err));
    }
}