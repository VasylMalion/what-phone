// models
import Phone from "../models/Phone";

const addPhone = async (req, res) => {

    try {
        const {
            name,
            imgUrl,
            cost,
            diagonal,
            screenRefreshRate,
            sizeOfScreen,
            internalMemory,
            RAM,
            camera,
            frontCamera,
            batteryCapacity,
            countOfSIM,
            countOfCore
        } = req.body;

        const phone = new Phone({
            name,
            imgUrl,
            cost,
            diagonal,
            screenRefreshRate,
            sizeOfScreen,
            internalMemory,
            RAM,
            camera,
            frontCamera,
            batteryCapacity,
            countOfSIM,
            countOfCore
        })

        if (phone) {
            await phone.save()
        }

        res.status(201).json({message: "Success add phone"})
    }
    catch (e) {
        console.log(e)
    }
}

const getAllPhones = async (req, res) => {
    const allPhones = await Phone.find().skip(+req.query.page * +req.query.limit).limit(+req.query.limit)
    const allPhonesCount = await Phone.find().count()

    res.json({allPhones, allPhonesCount})
}

const getOnePhone = async (req, res) => {
    const phone = await Phone.findOne({_id: req.params.id})

    res.send({phone})
}

export {
    addPhone,
    getAllPhones,
    getOnePhone
}