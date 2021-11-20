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
    public async crearFabricante(req:Request, res:Response){
        const {
            id,
            nombre,
            domicilio,
            status
            
        } =req.body
        try {
            let body: FabricanteI = {
                nombre,
                domicilio,
                status
                
            }
            const fabricante = await Fabricante.create(body);
            res.status(200).json({fabricante})
        } catch (error) {
            res.status(500).json({msg: "OPERACION INVALIDA"})
            
        }
    }

    //actualizar
    public async updateFabricante (req:Request, res:Response){
        const {id:pk} = req.params
        const {
            id,
            nombre,
            domicilio,
            status
        } =req.body
        try {
            let body: FabricanteI = {
                nombre,
                domicilio,
                status
            }
            const fabricanteExist: FabricanteI | null =await Fabricante.findByPk(pk)
            
            if(! fabricanteExist) return res.status(500).json({msg:'¡Este fabricante no existe en la base de datos!'})

            await Fabricante.update(
                body,
                {
                    where:{id:pk}
                }
            )
            const fabricante: FabricanteI | null = await Fabricante.findByPk(pk)
            res.status(200).json({fabricante})
        } catch (error) {
            res.status(500).json({msg:"No se pudo actualizar"})
        }
    }
 public async deleteFabricante (req:Request, res:Response){
        const {id:pk} = req.params;

        try {
            const fabricanteExist: FabricanteI | null = await Fabricante.findByPk(pk);

            if(!fabricanteExist) return res.status(500).json({msg: '¡Ese fabricante no existe en la base de datos!'});
            
            await Fabricante.update(
                {
                status: "Desactivado"
                },
                {
                    where:{id:pk}
                }
            );
            return res.status(200).json({msg: 'Este fabricante fue eliminado !'})
        } catch (error) {
            
        }
    }
    // public async createpedido(req:Request, res:Response){
    //     const {
    //         nombre,
    //         domicilio,
    //         status,
    //         ComponenteId

    //     }=req.body

    //     try {
    //         let body
    //     } catch (error) {
            
    //     }
    // }
}
