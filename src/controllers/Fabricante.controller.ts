import { Request,Response } from "express";

import { Fabricante, FabricanteI } from "../models/Fabricante";


export class FabricanteController{  
    // MOSTRAR LO DE LA TABLA
    public async getFabricante(req:Request, res:Response){
    try {
        const fabricante = await Fabricante.findAll()
        res.status(200).json({fabricante})
    } catch (error) {
        res.status(500).json({msg: "OPERACION INVALIDA"})
    }
    }
    //mostrar uno solo o buscar
    public async getOneFabricante (req:Request, res:Response){
        const {id}= req.params

        try {
            const fabricante:FabricanteI | null =await Fabricante.findOne({where:{id:id}})
            res.status(200).json({fabricante})
        } catch (error) {
            res.status(500).json({msg:"no se puede mostrar uno a uno"})
        }
    }
    // INGRESAR DATOS
    public async creaFabricante(req:Request, res:Response){
        const body: FabricanteI =req.body
        try {
            const fabricante =await Fabricante.create(body)
            res.status(200).json({fabricante})
        } catch (error) {
            res.status(500).json({msg: "OPERACION INVALIDA"})
            
        }

    }
    //actualizar
    public async updateFabricante (req:Request, res:Response){
        const {id}= req.params
        const body : FabricanteI = req.body
        try {
            
            const fabricante_existente: FabricanteI | null =await Fabricante.findByPk(id)
            await Fabricante.update(
                body,{where:{id:id}}
            )
            const fabricante: FabricanteI | null =await Fabricante.findByPk(id)
            
            res.status(200).json({fabricante})

        } catch (error) {
            res.status(500).json({msg:"no se pudo actualizar"})
        }
    }

    
}