import { Router } from 'express';
import { check } from 'express-validator';
import { deleteUser, login, register } from '../controllers/auth-api-controller.js';

const router = Router();

const registrationValidator = [
    check('email', "Email isn't valid").isEmail(),
    check('password', 'Password is to short').isLength({ min: 6 })
];

const loginValidator = [
    check('email', 'Type valid email').normalizeEmail().isEmail(),
    check('password', 'Type valid password').exists()
];

router.post('/auth/register', registrationValidator, register);

router.post('/auth/login', loginValidator, login);

router.delete('/auth/user', deleteUser);

export default router;
