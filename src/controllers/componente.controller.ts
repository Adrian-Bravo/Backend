import { Request, Response } from "express";
import { Componente, ComponenteI } from "../models/Componente";

export class ComponenteController {
    public index(req: Request, res: Response) {
        Componente.findAll({})
            .then((componentes: Array<Componente>) => res.json(componentes))
            .catch((err: Error) => res.status(500).json(err));
    }

    public async createComponente(req: Request, res: Response){
        // const body: ComponenteI = req.body;

        // try {
        //     if((!body.nombre && !body.especificacion && !body.cantidad && !body.precio)){
        //         return res.status(400).json({msg: 'Some data is requiered'});
        //     }

        //     const componente = await Componente.create(body);
        //     res.status(200).json({componente})


        // } catch (error) {
            
        // }

        const {
            id, 
            nombre, 
            especificacion, 
            cantidad, 
            precio
        } = req.body;

        try {
            let body: ComponenteI = {
                nombre,
                especificacion,
                cantidad,
                precio
            }

            const componente = await Componente.create(body);
            res.status(200).json({componente})

        } catch (error) {
            return res.status(500).json({msg:'Error Internal'})
        }


    }


    //mostrar uno solo o buscar
    public async getOneComponente (req:Request, res:Response){
        const {id}= req.params
    
        try {
            const componente: ComponenteI | null = await Componente.findOne({where:{id:id}})
            res.status(200).json({componente})
        } catch (error) {
            res.status(500).json({msg:"no se puede mostrar uno a uno"})
        }
    }

    public async updateComponente (req:Request, res:Response){
        // const {id}= req.params
        // const body : ComponenteI = req.body

        // try {
        //     const aparato_existente: ComponenteI | null = await Componente.findByPk(id)
        //     await Componente.update(
        //         body,{where:{id:id}}
        //     )
        //     const componente: ComponenteI | null = await Componente.findByPk(id)
            
        //     res.status(200).json({componente})

        // } catch (error) {
        //     res.status(500).json({msg:"no se pudo actualizar"})
        // }

        const {id: pk} = req.params

        const {
            id, 
            nombre, 
            especificacion, 
            cantidad, 
            precio
        } = req.body

        try {
            let body: ComponenteI = {
                nombre,
                especificacion,
                cantidad,
                precio
            }

            const componenteExist: ComponenteI | null = await Componente.findByPk(pk)

            if(!componenteExist) return res.status(500).json({msg: 'El componente no existe'})

            await Componente.update(
                body,
                {
                    where: {id: pk}
                }
            )

            const componente: ComponenteI | null = await Componente.findByPk(pk)
            res.status(200).json({componente})


        } catch (error) {
            return res.status(500).json({msg:'Error Internal'})
        }

    }

    public async deleteComponente(req: Request, res: Response){
        const { id: pk } = req.params;

        try {
            const componenteExit: ComponenteI | null = await Componente.findByPk(pk)
            if(!componenteExit) return res.status(500).json({msg:'El componente no existe'})

            await Componente.destroy(
                {
                    where: {id:pk}
                }
            )

            return res.status(200).json({msg:'Componente eliminado'})

        } catch (error) {
            return res.status(500).json({msg:'Error Internal'})
        }
    }



}