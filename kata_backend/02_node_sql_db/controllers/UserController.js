const to = require('await-to-js').default;
const { User } = require('../models');

const findAll = async (_, res) => {
    const [error, response] = await to(User.findAll());
    if (error) {
        return res.status(500).json({
            message: "Error obtained list of userss",
            error
        })
    }
    return res.status(200).json({
        messsage: "successfully obtained list of userss",
        response
    })
}

const findOneById = async (req, res) => {
    const { idUser } = req.params;
    const [error, response] = await to(User.findOneById(idUser));
    if (error || response.length === 0) {
        return res.status(404).json({
            message: "Provided id doesn't exist",
            error
        })
    }

    return res.status(200).json({
        messsage: "successfully obtained users by id",
        response
    })
}


const updateOneById = async (req, res) => {
    const { idUser } = req.params;
    const [error, response] = await to(User.updateOneById(idUser, req.body));
    if (error) {
        return res.status(404).json({
            message: "Provided id doesn't exist",
            error
        })
    }

    return res.status(200).json({
        messsage: "successfully updated users by id",
        response
    })
}

const deleteOneById = async (req, res) => {
    const { idUser } = req.params;
    const [error, _] = await to(User.deleteOneById(idUser));
    if (error) {
        return res.status(404).json({
            message: "Error doesn't exist",
            error
        })
    }

    return res.status(204).send();
}

const create = async (req, res) => {
    const { body: { first_name, last_name, email, phone, biography } } = req;
    const newUser = {
        first_name, last_name, email, phone, biography
    };

    const [error, users] = await to(User.create(newUser));

    if (error) {
        res.status(400).json({
            message: error,
        })
    }

    return res.status(201).json({
        message: 'users created'
    })
}



module.exports = {
    findAll,
    create,
    findOneById,
    updateOneById,
    deleteOneById
}
