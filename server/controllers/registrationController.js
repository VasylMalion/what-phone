// core
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "config";

// models
import User from "../models/User";

const registration = async (req, res) => {
    try {
        const {email, password, name, surname} = req.body;
        const candidate = await User.findOne({email})

        if (candidate) {
            return res.status(500).json({message: "email has already used"})
        }

        const hashPassword = await bcrypt.hash(password, 7);

        const user = new User({email, password: hashPassword, name, surname})
        await user.save()

        const token = jwt.sign({email: user.email, login: user.name}, config.get("secretKeyToken"), {expiresIn: "24h"})

        return res.json({token})

    } catch (e) {
        res.status(500).json(e)
    }
}

export {
    registration
}