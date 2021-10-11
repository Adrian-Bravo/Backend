import {Model, DataTypes} from 'sequelize';
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