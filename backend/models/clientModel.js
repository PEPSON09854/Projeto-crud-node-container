import db from '../config/db.js'
import { DataTypes } from 'sequelize'

const Container = db.define('Container', {
    client:{
        type: DataTypes.STRING,
        required:true
    },
    container:{
        type: DataTypes.STRING,
        required:true
    },
    type:{
        type: DataTypes.STRING,
        required:true
    },
    status:{
        type: DataTypes.STRING,
        required:true
    },
    category:{
        type: DataTypes.STRING,
        required:true
    },
    movements:{
        type: DataTypes.STRING,
        required:true
    },
    hourStart:{
        type: DataTypes.STRING,
        required:true
    },
    hourEnd:{
        type: DataTypes.STRING,
        required:true
    }
})

export default Container