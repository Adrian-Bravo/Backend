import { Request, Response } from "express";
import {Tipo_electrodomesticos, Tipo_electrodomesticos1} from "../models/Tipo_electrodomesticos";

export class Tipo_electrodomesticosController{  
    // MOSTRAR LOS CAMPOS DE LA TABLA
   
    public getTipo_electrodomesticos (req:Request, res: Response){
        Tipo_electrodomesticos.findAll({where:{status:"Activado"}})
        .then((tipo_electrodomesticos: Array<Tipo_electrodomesticos>) => res.json(tipo_electrodomesticos))
        .catch((err: Error) => res.status(500).json(err));
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
        const {
            id,
            nombre,
            caracteristicas,
            status,
        } =req.body
        try {
            let body: Tipo_electrodomesticos1 = {
                nombre,
                caracteristicas,
                status,
            }
            const tipo_electrodomesticosExist: Tipo_electrodomesticos | null = await Tipo_electrodomesticos.findOne(
                {
                    where: { 
                            nombre: body.nombre,
                           },
                }
            );
            if (tipo_electrodomesticosExist){
                return res.status(400).json({msg: 'Este tipo de electrodomestico ya existe, intente nuevamente'})
            }
            const tipo_electrodomesticos = await Tipo_electrodomesticos.create(body);
            res.status(200).json({tipo_electrodomesticos})
        } catch (error) {
            res.status(500).json({msg: "OPERACION INVALIDA"})
            
        }
    }
    //actualizar
    public async updateTipo_electrodomesticos (req:Request, res:Response){
        const {id:pk} = req.params
        const {
            id,
            nombre,
            caracteristicas,
            status
        } =req.body
        try {
            let body: Tipo_electrodomesticos1 = {
                nombre,
                caracteristicas,
                status
            }
            const tipo_electrodomesticosExist: Tipo_electrodomesticos1 | null =await Tipo_electrodomesticos.findByPk(pk)
            
            if(!tipo_electrodomesticosExist) return res.status(500).json({msg:'¡El tipo de electrodomesticos no existe!'})

            await Tipo_electrodomesticos.update(
                body,
                {
                    where:{id:pk}
                }
            )
            const tipo_electrodomesticos: Tipo_electrodomesticos1 | null = await Tipo_electrodomesticos.findByPk(pk)
            res.status(200).json({tipo_electrodomesticos})
        } catch (error) {
            res.status(500).json({msg:"No se pudo actualizar"})
        }
    }

    public async deleteTipo_electrodomesticos (req:Request, res:Response){
        const {id:pk} = req.params;

        try {
            const tipo_electrodomesticosExist: Tipo_electrodomesticos1 | null = await Tipo_electrodomesticos.findByPk(pk);

            if(!tipo_electrodomesticosExist) return res.status(500).json({msg: '¡El Tipo de electrodomesticos no existe !'});
            
            await Tipo_electrodomesticos.update(
                {
                status: "Desactivado"
                },
                {
                    where:{id:pk}
                }
            );
            return res.status(200).json({msg: 'El Tipo de electrodomesticos fue eliminado !'})
        } catch (error) {
            
        }
    }
}