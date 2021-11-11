import sequelize, {Model, DataTypes} from 'sequelize';
// const Sequelize = require('sequelize');
import { database } from '../database/db';

export class ComponenteFabricante extends Model{
    public destino!:string;
    public fecha!:Date;

}
export interface ComponenteFabricanteI {
    destino:string;
    fecha:Date;
}

ComponenteFabricante.init(
    {
        destino:{
            type:DataTypes.STRING,
            allowNull: false

        },
        fecha:{
            type:DataTypes.DATEONLY,
            allowNull: false
        },
    },
    {
        tableName: "componentefabricante",
        sequelize: database,
        timestamps: true
    }
);