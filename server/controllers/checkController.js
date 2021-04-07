// core
import jwt from "jsonwebtoken";
import config from "config";

const check = async (req, res) => {

    const {email, id} = req.body;
    const token = jwt.sign(
        {id, email},
        config.get("SECRET_KEY"),
        {expiresIn: '24h'})

    return res.json({token})
}

export {
    check
}