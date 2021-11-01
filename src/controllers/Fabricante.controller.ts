import { Request,Response } from "express";

import { Fabricante, FabricanteI } from "../models/Fabricante";


export class FabricanteController{ 
    public async getFabricante(req:Request, res:Response){
        try {
            const fabricante = await Fabricante.findAll(//la variable user obtiene un registro de todos los usuarios que estan en el modelo User
            {
                where: {status:"Activado"}
            }
            )
            if (!fabricante){ //if (users) si hay registros y (!users) no hay registros
                res.status(400).json({msg:'No hay aparatos registrados'}) //Retorna la respuesta: errores 400 0 500 si no hay registros
            }
            return res.status(200).json({fabricante}) //Retorna usuarios
        
        }catch (error){
            res.status(500).json({msg:'Error interno: No hay conexión con la base de datos'})
        }
    }

    
}