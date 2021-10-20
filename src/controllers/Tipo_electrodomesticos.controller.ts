import { Request, Response } from "express";
import {Tipo_electrodomesticos, Tipo_electrodomesticos1} from "../models/Tipo_electrodomesticos";

export class Tipo_electrodomesticosController{  
    // MOSTRAR LOS CAMPOS DE LA TABLA
    public async getTipo_electrodomesticos(req:Request, res:Response){
    try {
        const tipo_electrodomesticos = await Tipo_electrodomesticos.findAll()
        res.status(200).json({tipo_electrodomesticos})
    } catch (error) {
        res.status(500).json({msg: "OPERACION INVALIDA"})
    }
    }
    //mostrar uno solo o buscar
    public async getOneTipo_electrodomestico (req:Request, res:Response){
        const {id}= req.params

        try {
            const tipo_electrodomesticos:Tipo_electrodomesticos1 | null =await Tipo_electrodomesticos.findOne({where:{id:id}})
            res.status(200).json({tipo_electrodomesticos})
        } catch (error) {
            res.status(500).json({msg:"no se puede mostrar uno a uno"})
        }
    }
    // INGRESAR DATOS
    public async creaTipo_electrodomesticos(req:Request, res:Response){
        const body: Tipo_electrodomesticos1 =req.body
        try {
            const tipo_electrodomesticos =await Tipo_electrodomesticos.create(body)
            res.status(200).json({tipo_electrodomesticos})
        } catch (error) {
            res.status(500).json({msg: "OPERACION INVALIDA"})
            
        }
    }
    //actualizar
    public async updateTipo_electrodomesticos (req:Request, res:Response){
        const {id} = req.params
        const body : Tipo_electrodomesticos1 = req.body
        try {
            
            const Tipo_electrodomesticos_existente: Tipo_electrodomesticos1 | null =await Tipo_electrodomesticos.findByPk(id)
            await Tipo_electrodomesticos.update(
                body,{where:{id:id}}
            )
            const tipo_electrodomesticos: Tipo_electrodomesticos1 | null =await Tipo_electrodomesticos.findByPk(id)
            
            res.status(200).json({tipo_electrodomesticos})

        } catch (error) {
            res.status(500).json({msg:"no se pudo actualizar"})
        }
    }
}