import { Request, Response } from "express";
import { Aparato, AparatoI } from "../models/Aparato";

export class AparatoController {
    
        public getAparato (req:Request, res: Response){
            Aparato.findAll({where:{status:"Activado"}})
            .then((aparato: Array<Aparato>) => res.json(aparato))
            .catch((err: Error) => res.status(500).json(err));
        }
        //mostrar uno solo o buscar
        public async getOneAparato (req:Request, res:Response){
            const {id}= req.params
    
            try {
                const aparato:AparatoI | null =await Aparato.findOne({where:{id:id}})
                res.status(200).json({aparato})
            } catch (error) {
                res.status(500).json({msg:"no se puede mostrar uno a uno"})
            }
        }
        // INGRESAR DATOS
        public async crearAparato(req:Request, res:Response){
            const {
                id,
                descripcion,
                status
            } =req.body
            try {
                let body: AparatoI = {
                    descripcion,
                    status
                }
                const aparato = await Aparato.create(body);
                res.status(200).json({aparato})
            } catch (error) {
                res.status(500).json({msg: "OPERACION INVALIDA"})
                
            }
        }
        //actualizar
        public async updateAparato (req:Request, res:Response){
            const {id:pk} = req.params
            const {
                id,
                descripcion,
                status
            } =req.body
            try {
                let body: AparatoI = {
                    descripcion,
                    status
                }
                const aparatoExist: AparatoI | null =await Aparato.findByPk(pk)
                
                if(!aparatoExist) return res.status(500).json({msg:'¡Este aparato no existe en la base de datos!'})
    
                await Aparato.update(
                    body,
                    {
                        where:{id:pk}
                    }
                )
                const aparato: AparatoI | null = await Aparato.findByPk(pk)
                res.status(200).json({aparato})
            } catch (error) {
                res.status(500).json({msg:"No se pudo actualizar"})
            }
        }
    
        public async deleteAparato (req:Request, res:Response){
            const {id:pk} = req.params;
    
            try {
                const aparatoExist: AparatoI | null = await Aparato.findByPk(pk);
    
                if(!aparatoExist) return res.status(500).json({msg: '¡Ese aparato no existe en la base de datos!'});
                
                await Aparato.update(
                    {
                    status: "Desactivado"
                    },
                    {
                        where:{id:pk}
                    }
                );
                return res.status(200).json({msg: 'Este Aparato fue eliminado !'})
            } catch (error) {
                
            }
        }
      
}
