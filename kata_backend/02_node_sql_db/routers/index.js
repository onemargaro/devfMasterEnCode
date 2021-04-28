import express from 'express';
import RentalRouter from './RentalRouter.js';
import UserRouter from './UserRouter.js';
const router = express.Router();

router.use(RentalRouter)
router.use(UserRouter)

export default router;
