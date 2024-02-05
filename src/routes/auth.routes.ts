import express from 'express';
import { forgotPassword } from '../controllers/auth/auth.actions';

const router = express.Router();

router.get('/password-reset', forgotPassword);

export { router as authRouter };