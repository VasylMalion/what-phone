// models
import User from "../models/User";

const addUser = async (req, res) => {
    const {email} = req.body
    const user = await User.findOne({email})

    const newUser = {
        id: user._id,
        email: user.email,
        name: user.name,
        surname: user.surname
    }

    res.send(newUser)
}

export {
    addUser
}