import {Schema, model} from "mongoose";

const schema = new Schema({
    name: {type: String, required: true},
    surname: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    phones: {type: Array}
})

export default model("User",schema);