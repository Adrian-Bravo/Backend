import { Model,DataTypes } from "sequelize";
import{Componente} from"../models/Componente"
// const Sequelize = require ('sequelize');
import {database} from "../database/db";
import { ComponenteFabricante } from "./ComponenteFabricante";

export class Fabricante extends Model {
    public nombre!: string;
    public domicilio!: string;
    public status!: boolean;
    
}

export interface FabricanteI {
     nombre: string;
     domicilio: string;
     status: boolean;
     
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
        status:{
            type: DataTypes.ENUM,
            values:['Activido','Desactivado'],
            defaultValue: 'Activido',
            allowNull: false
        }

    },
    {
        tableName:"fabricantes",
        sequelize: database,
        timestamps: true
    }

);

Componente.belongsToMany(Fabricante,{through: ComponenteFabricante});
Fabricante.belongsToMany(Componente,{through:ComponenteFabricante});