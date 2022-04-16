const { PrismaClient } = require('@prisma/client')


user_id = 1;
prisma = new PrismaClient()

const createCostumer = async (req, res) => {
    const { first_name, last_name, age } = req.body
    const createdCostumer = await prisma.costumers.create({
        data: {
            first_name,
            last_name,
            age,
            created_by: user_id
        }
    })
    res.send(createdCostumer)
}

const updateCostumer = async (req, res) => {
    const id = parseInt(req.params.id)
    const { first_name, last_name, age } = req.body
    const updatedCostumer = await prisma.costumers.update({
        where: { id },
        data: {
            first_name,
            last_name,
            age,
            updated_by: user_id,
            updated_at: new Date()
        }
    })
    res.send(updatedCostumer)
}

const deleteCostumer = async (req, res) => {
    const id = parseInt(req.params.id)
    await prisma.costumers.delete({
        where: { id }
    })
    res.status(204).send()
}

const findAllCostumers = async (req, res) => {
    const costumers = await prisma.costumers.findMany()
    res.send(costumers)
}

const findOneCostumer = async (req, res) => {
    const id = parseInt(req.params.id)
    const costumer = await prisma.costumers.findUnique({
        where: {
            id
        }
    })
    res.send(costumer)
}

module.exports = {
    createCostumer,
    updateCostumer,
    deleteCostumer,
    findAllCostumers,
    findOneCostumer
}