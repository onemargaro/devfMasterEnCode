import { to } from 'await-to-js';
import { Rental } from '../models/index.js';

const findAll = async (_, res) => {
    const [error, response] = await to(Rental.findAll());
    if (error) {
        return res.status(500).json({
            message: "Error obtained list of rentals",
            error
        })
    }
    return res.status(200).json({
        messsage: "successfully obtained list of rentals",
        response
    })
}

const findOneById = async (req, res) => {
    const { idRental } = req.params;
    const [error, response] = await to(Rental.findOneById(idRental));
    if (error || response.length === 0) {
        return res.status(404).json({
            message: "Provided id doesn't exist",
            error
        })
    }

    return res.status(200).json({
        messsage: "successfully obtained rental by id",
        response
    })
}


const updateOneById = async (req, res) => {
    const { idRental } = req.params;
    const [error, response] = await to(Rental.updateOneById(idRental, req.body));
    if (error || response.length === 0) {
        return res.status(404).json({
            message: "Provided id doesn't exist",
            error
        })
    }

    return res.status(200).json({
        messsage: "successfully updated rental by id",
        response
    })
}

const deleteOneById = async (req, res) => {
    const { idRental } = req.params;
    const [error, _] = await to(Rental.deleteOneById(idRental));
    if (error) {
        return res.status(404).json({
            message: "Error doesn't exist",
            error
        })
    }

    return res.status(204).send();
}

const create = async (req, res) => {
    const { body: { title, address, guests, description } } = req;
    const newRental = {
        title, address, guests, description
    };

    const [error, rental] = await to(Rental.create(newRental));

    if (error) {
        res.status(400).json({
            message: error,
        })
    }

    return res.status(200).json({
        message: 'rental created',
        rental
    })
}



export default {
    findAll,
    create,
    findOneById,
    updateOneById,
    deleteOneById
}
