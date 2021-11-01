import sequelize, {Model, DataTypes} from "sequelize";
import {database} from '../database/db';


export class Tipo_electrodomesticos extends Model {
    public nombre!: string;
    public caracteristicas!:string;
    public status!: boolean;
} 

export interface Tipo_electrodomesticos1{
    nombre:string;
    caracteristicas:string;
    status: boolean;
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
        status: {
            type: DataTypes.ENUM,
            values: ['Activado','Desactivado'],
            defaultValue: 'Activado',
            allowNull: false
        },
    },
    {
        tableName:"Tipo_electrodomesticos",
        sequelize:database,
        timestamps:true
    }
);
