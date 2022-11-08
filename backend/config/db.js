import {Sequelize} from 'sequelize'

const sequelize = new Sequelize('db', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    sequelize.authenticate()
    console.log('Conectado com sucesso!')
} catch (error) {
    console.log(error)
}

export default sequelize