// core
import {Router} from "express";
const router = Router();

// controllers
import {addUser} from "../controllers/addUserController";

router.post("/", addUser);

export {
    router
}
