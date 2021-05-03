import express from 'express';
import { UserController } from '../controllers/index.js';
import { checkRole, verifyToken } from '../middlewares/index.js';
import { UserValidator } from '../validators/index.js';
const router = express.Router();

// Create
router.post('/users', [UserValidator.create, verifyToken, checkRole('superadmin')], UserController.create);

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
