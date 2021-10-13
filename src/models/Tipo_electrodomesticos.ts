import sequelize, {Model, DataTypes} from "sequelize";
import {database} from '../database/db';

export class Tipo_electrodomesticos extends Model {
    public nombre!: string;
    public caracteristicas!:string;
} 

export interface Tipo_electrodomesticos1{
    nombre:string;
    caracteristicas:string;
}

Tipo_electrodomesticos.init (
    {
        nombre:{
            type: DataTypes.TEXT,
            allowNull:false
        },

        caracteristicas:{
            type: DataTypes.TEXT,
            allowNull:false
        },
    },
    {
        tableName:"Tipo_electrodomesticos",
        sequelize:database,
        timestamps:true
    }
);