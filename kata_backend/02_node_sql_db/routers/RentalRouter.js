import express from 'express';
import { RentalController } from '../controllers/index.js';
const router = express.Router();

// Create
router.post('/rentals', RentalController.create);

// Read all
router.get('/rentals', RentalController.findAll);

// Read One
router.get('/rentals/:idRental', RentalController.findOneById);

// Update One
router.patch('/rentals/:idRental', RentalController.updateOneById);

// Delete One (borrado logico)
router.delete('/rentals/:idRental', RentalController.deleteOneById);

// Destroy One (borrado fisico)

export default router;
