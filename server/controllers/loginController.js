// core
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "config";

// models
import User from "../models/User";

const login = async (req, res) => {
    try {
        const {email, password} = req.body;

        const user = await User.findOne({email})

        if (!user) {
            return res.json({message: "Пароль або email не валідні"}).status(400)
        }

        const validPassword = bcrypt.compareSync(password, user.password)

        if (!validPassword) {
            return res.json({message: "Пароль або email не валідні"}).status(400)
        }

        const token = jwt.sign({email: user.email, login: user.name}, config.get("secretKeyToken"), {expiresIn: "24h"})

        return res.json({token})

    } catch (e) {
        res.status(500).json(e)
    }
}

export {
    login
}