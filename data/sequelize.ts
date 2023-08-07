import { Sequelize } from "sequelize";
import { DataType } from "sequelize-typescript";

const sequelize = new Sequelize('notes', 'admin', 'root', {
    host: 'db',
    port: 5432,
    dialect: 'postgres'
})


export const initSequelize = () => {
    sequelize.authenticate().then(() => console.log('Database connected.')).catch((e) => console.log("Erorr:", e))
} 

const Notes = sequelize.define("notes", {
    name: DataType.STRING, 
    category: DataType.STRING, 
    content: DataType.STRING, 
    created: DataType.DATE, 
    archived: DataType.BOOLEAN, 
    date: DataType.STRING
})