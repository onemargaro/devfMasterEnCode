import express from 'express';
import { UserController } from '../controllers/index.js';
const router = express.Router();

// Create
router.post('/users', UserController.create);

// Read all
router.get('/users', UserController.findAll);

// Read One
router.get('/users/:idUser', UserController.findOneById);

// Update One
router.patch('/users/:idUser', UserController.updateOneById);

// Delete One (borrado logico)
router.delete('/users/:idUser', UserController.deleteOneById);

// Destroy One (borrado fisico)

// login
router.post('/auth/login', UserController.login);


export default router;
