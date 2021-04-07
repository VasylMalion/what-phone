// core
import {Router} from "express";
const router = Router();

// controllers
import {login} from "../controllers/loginController";

router.post("/", login);

export {
    router
}