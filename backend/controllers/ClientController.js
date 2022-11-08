import Container from '../models/clientModel.js'

const home = async (req, res)=>{

    const dataContainer = await Container.findAll({raw: true})

    res.render('pages/home', {dataContainer})
}

const createContainer = (req, res)=>{
    res.render('pages/register')
}

const register = async (req, res)=>{

    const client = req.body.client
    const container = req.body.container
    const type = req.body.type
    const status = req.body.status
    const category = req.body.category
    const movements = req.body.movements
    const hourStart = req.body.hourStart
    const hourEnd = req.body.hourEnd

    await Container.create({
        client, container, type,
        status, category, movements,
        hourStart, hourStart, hourEnd
    })

    res.redirect('/')
}

const clientDelete = async (req, res)=>{
    const id = req.params.id

    await Container.destroy({where: {id:id}})

    res.redirect('/')
}

export {home, register, createContainer, clientDelete}