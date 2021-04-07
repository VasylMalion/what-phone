import User from "../models/User";
import Phone from "../models/Phone";

const addFavouritePhone = async (req, res) => {

    const {id, email} = req.body
    const user = await User.findOne({email})
    let needAdd = true;

    user.phones && user.phones.forEach(phone => {
        if (phone._id == id) {
            needAdd = false
        }
    })

    if (needAdd) {
        // add
        const phone = await Phone.findOne({_id: id})
        const newPhonesArr = user.phones
        newPhonesArr.push(phone)

        await User.findOneAndUpdate({email}, {$set: {phones: newPhonesArr}})

        res.send({
            method: "add",
            phone
        })
    } else {
        // remove
        needAdd = true;
        const phone = await Phone.findOne({_id: id})
        const index = user.phones.findIndex(phone => phone._id == id)

        const removeArr = [
            ...user.phones.slice(0, index),
            ...user.phones.slice(index + 1, )
        ]

        await User.findOneAndUpdate({email}, {$set: {phones: removeArr}})

        res.send({
            method: "remove",
            phone
        })
    }
}

const initialFavoritePhones =  async (req, res) => {
    const {email} = req.body
    const user = await User.findOne({email})

    res.send(user)
}

export {
    addFavouritePhone,
    initialFavoritePhones
}