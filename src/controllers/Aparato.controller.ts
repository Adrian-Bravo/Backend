import { Request, Response } from "express";
import { Aparato, AparatoI } from "../models/Aparato";

export class AparatoController {
    public async getAparato(req:Request, res:Response){
        try {
            const aparato = await Aparato.findAll(//la variable user obtiene un registro de todos los usuarios que estan en el modelo User
            {
                where: {status:"Activado"}
            }
            )
            if (!aparato){ //if (users) si hay registros y (!users) no hay registros
                res.status(400).json({msg:'No hay aparatos registrados'}) //Retorna la respuesta: errores 400 0 500 si no hay registros
            }
            return res.status(200).json({aparato}) //Retorna usuarios
        
        }catch (error){
            res.status(500).json({msg:'Error interno: No hay conexión con la base de datos'})
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
