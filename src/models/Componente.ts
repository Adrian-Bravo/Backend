//import sequelize, {Model, DataTypes} from 'sequelize';
const Sequelize = require('sequelize');
import { database } from '../database/db';

export class Componente extends Sequelize.Model {
    public nombre!: string; 
    public especificacion!: string; 
    public cantidad!: number; 
    public precio!: number; 
}

export interface ComponenteI {
    nombre: string; 
    especificacion: string; 
    cantidad: number; 
    precio: number; 
}

Componente.init (
    {
        nombre: {
            type: Sequelize.DataTypes.STRING,
            allowNull: false
        },

        especificacion: {
            type: Sequelize.DataTypes.TEXT,
            allowNull: false
        },

        cantidad: {
            type: Sequelize.DataTypes.INTEGER,
            allowNull: false
        },

        precio: {
            type: Sequelize.DataTypes.FLOAT,
            allowNull: false
        },
    },

    {
        tableName: "componente",
        sequelize: database,
        timestamps: true
    }

);