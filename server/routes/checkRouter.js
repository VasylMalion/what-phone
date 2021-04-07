// core
import {Router} from "express";
const router = Router();

// controllers
import {check} from "../controllers/checkController";

router.get("/", check);

export {
    router
}