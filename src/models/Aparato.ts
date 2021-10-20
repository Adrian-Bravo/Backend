import sequelize, {Model, DataTypes} from "sequelize";
import {database} from '../database/db';
import {Componente} from "../models/Componente";
export class Aparato extends Model {
    public descripcion!: string;
} 

export interface AparatoI{
    descripcion:string;
}

Aparato.init (
    {
        descripcion:{
            type: DataTypes.TEXT,
            allowNull:false
        },
    },
    {
        tableName:"Aparato",
        sequelize:database,
        timestamps:true
    }
);

Aparato.hasMany(Componente);
Componente.belongsTo(Aparato);