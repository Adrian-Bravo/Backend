import { Request, Response } from "express";
import { Aparato } from "../models/Aparato";

export class AparatoController {
    public index(req: Request, res: Response) {
        Aparato.findAll({})
            .then((aparatos: Array<Aparato>) => res.json(aparatos))
            .catch((err: Error) => res.status(500).json(err));
    }
}
