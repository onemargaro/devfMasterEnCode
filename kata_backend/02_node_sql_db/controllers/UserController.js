import to from 'await-to-js';
import jwt from 'jsonwebtoken';
import { User } from '../models/index.js';
import { comparePasswords, hashPassword } from '../utils/hashPassword.js';

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
    const { body: { first_name, last_name, email, phone, biography, password } } = req;
    const newUser = {
        first_name, last_name, email, phone, biography, password
    };

    if (password) {
        newUser.password = hashPassword(password);
    }

    const [error, _] = await to(User.create(newUser));

    if (error) {
        res.status(400).json({
            message: error,
        })
    }

    return res.status(201).json({
        message: 'users created'
    })
}

const login = async (req, res) => {
    const { body: { password } } = req;
    // Primero verificar que existe el usuario en la base de datos
    const [error, user] = await to(User.findOne({ email: req.body.email }));
    if (error || !user) return res.status(404).send({ message: error });
    // Segundo, si el usuario existe. Revisar que la contraseña que proporciona sea correcta
    const isMatch = await comparePasswords(password, user.password);
    if (!isMatch) return res.status(401).send({ message: 'Unauthorized' });
    // Tercero, si las contraseñas coinciden, generamos un JWT y respondemos con este
    const token = jwt.sign(user, process.env.JWT_PRIVATE, { expiresIn: '1h' });
    return res.status(200).json({ token });
}



export default {
    create,
    deleteOneById,
    findAll,
    findOneById,
    login,
    updateOneById
}
