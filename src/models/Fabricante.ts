import { Model,DataTypes } from "sequelize";

// const Sequelize = require ('sequelize');
import {database} from "../database/db";

export class Fabricante extends Model {
    public nombre!: string;
    public domicilio!: string;
    
}

export interface FabricanteI {
     nombre: string;
     domicilio: string;
     
}

Fabricante.init (
    {
        nombre:{
            type: DataTypes.STRING,
            allowNull: false

        },

        domicilio:{
            type: DataTypes.STRING,
            allowNull: false

        },
        

    },
    {
        tableName:"fabricantes",
        sequelize: database,
        timestamps: true
    }
);