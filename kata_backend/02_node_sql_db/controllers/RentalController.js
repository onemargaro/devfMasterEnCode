const { Rental } = require('../models');

const create = (req, res) => {
    const { body: { title, address, guests, description } } = req;
    const newRental = {
        title, address, guests, description
    };

    return Rental.create(newRental).then((resDB) => {
        return res.status(200).json({
            message: 'rental created',
            rental: resDB
        })
    }).catch((err) => {
        res.status(400).json({
            message: err,
        })
    });
}


module.exports = {
    create
}
