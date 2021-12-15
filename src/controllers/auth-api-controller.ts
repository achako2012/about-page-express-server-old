import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

const JWT_SECRET = 'Lol';

export const register = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ errors: errors.array(), message: 'Incorrect data while registration' });
        }

        const { email, password } = req.body;

        const candidate = await User.findOne({ email });

        if (candidate) {
            return res.status(400).json({ message: 'This customer already exist' });
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({ email, password: hashedPassword });
        await user.save();

        return res.status(201).json({ message: 'User created' });
    } catch (e) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

export const login = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ errors: errors.array(), message: 'Incorrect data while login' });
        }

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "Couldn't find the user" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Password is invalid ' });
        }

        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });

        return res.json({ token, userId: user.id });
    } catch (e) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(), message: 'Incorrect data' });
        }

        const { id } = req.body;

        const user = await User.findOne({ _id: id });

        if (!user) {
            return res.status(404).json({ message: "Couldn't find the user" });
        }

        await User.findOneAndDelete({ _id: id }, undefined, (err: any, result: any) => {
            if (err) console.log(err);

            console.log(result);
        });

        return res.json({ message: `User with id: ${id} deleted` });
    } catch (e) {
        return res.status(500).json({ message: 'Something went wrong' });
    }
};
