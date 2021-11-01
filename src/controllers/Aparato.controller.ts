import { Request, Response } from "express";
import { Aparato, AparatoI } from "../models/Aparato";

export class AparatoController {
    public async getAparato(req:Request, res:Response){
        try {
            const aparato = await Aparato.findAll()
            res.status(200).json({aparato})
        } catch (error) {
            res.status(500).json({msg: "OPERACION INVALIDA"})
        }
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
        public async creaAparato(req:Request, res:Response){
            const body: AparatoI =req.body
            try {
                const aparato =await Aparato.create(body)
                res.status(200).json({aparato})
            } catch (error) {
                res.status(500).json({msg: "OPERACION INVALIDA"})
                
            }
    
        }
        //actualizar
        public async updateAparato (req:Request, res:Response){
            const {id}= req.params
            const body : AparatoI = req.body
            try {
                
                const aparato_existente: AparatoI | null =await Aparato.findByPk(id)
                await Aparato.update(
                    body,{where:{id:id}}
                )
                const aparato: AparatoI | null =await Aparato.findByPk(id)
                
                res.status(200).json({aparato})
    
            } catch (error) {
                res.status(500).json({msg:"no se pudo actualizar"})
            }
        }
      
}
