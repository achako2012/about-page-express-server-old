import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
const JWT_SECRET = 'Lol';
export const register = async (req, res) => {
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
        res.status(500).json({ message: 'Something went wrong' });
    }
};
export const login = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res
                .status(400)
                .json({ errors: errors.array(), message: 'Incorrect data while login' });
        }
        const { email, password } = req.body;
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(404).json({ message: "Couldn't find the user" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Password is invalid ' });
        }
        const token = jwt.sign({ userId: user.id }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, userId: user.id });
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
export const deleteUser = async (req, res) => {
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
        await User.findOneAndDelete({ _id: id }, undefined, (err, result) => {
            if (err) console.log(err);
            console.log(result);
        });
        res.json({ message: `User with id: ${id} deleted` });
    } catch (e) {
        res.status(500).json({ message: 'Something went wrong' });
    }
};
//# sourceMappingURL=auth-api-controller.js.map
