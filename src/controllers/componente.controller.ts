import { Request, Response } from "express";
import { Componente, ComponenteI } from "../models/Componente";

export class ComponenteController {
    public index(req: Request, res: Response) {
        Componente.findAll({})
            .then((componentes: Array<Componente>) => res.json(componentes))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async createComponente(req: Request, res: Response){
        const body: ComponenteI = req.body;

        try {
            if((!body.nombre && !body.especificacion && !body.cantidad && !body.precio)){
                return res.status(400).json({msg: 'Some data is requiered'});
            }

            const componente = await Componente.create(body);
            res.status(200).json({componente})


        } catch (error) {
            
        }
    }

}