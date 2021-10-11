import sequelize, {Model, DataTypes} from 'sequelize';
// const Sequelize = require('sequelize');
import { database } from '../database/db';

export class Componente extends Model {
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
            type: DataTypes.STRING,
            allowNull: false
        },

        especificacion: {
            type: DataTypes.TEXT,
            allowNull: false
        },

        cantidad: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        precio: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
    },

    {
        tableName: "componente",
        sequelize: database,
        timestamps: true
    }

);