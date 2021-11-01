import sequelize, {Model, DataTypes} from "sequelize";
import {database} from '../database/db';
import {Componente} from "../models/Componente";
import { Tipo_electrodomesticos } from "./Tipo_electrodomesticos";
export class Aparato extends Model {
    public descripcion!: string;
    public status!:boolean;
} 

export interface AparatoI{
    descripcion:string;
    status:boolean;
}

Aparato.init (
    {
        descripcion:{
            type: DataTypes.TEXT,
            allowNull:false
        },
        status:{
            type: DataTypes.ENUM,
            values: ['Activado','Desactivado'],
            defaultValue:'Activado',
            allowNull:false
        },
    },
    {
        tableName:"Aparato",
        sequelize:database,
        timestamps:true
    }
);
Tipo_electrodomesticos.hasMany(Aparato);
Aparato.belongsTo(Tipo_electrodomesticos);
Aparato.hasMany(Componente);
Componente.belongsTo(Aparato);