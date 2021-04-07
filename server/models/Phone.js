import {Schema, model} from "mongoose";

const schema = new Schema({
    name: {type: String, required: true},
    imgUrl: {type: String, required: true},
    cost: {type: Number, required: true},
    diagonal: {type: Number, required: true},
    screenRefreshRate: {type: Number, required: true},
    sizeOfScreen: {type: String, required: true},
    internalMemory: {type: Number, required: true},
    RAM: {type: Number, required: true},
    camera: {type: Number, required: true},
    frontCamera: {type: Number, required: true},
    batteryCapacity: {type: Number, required: true},
    countOfSIM: {type: Number, required: true},
    countOfCore: {type: Number, required: true}
})

export default model("Phone",schema);
