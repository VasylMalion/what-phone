// core
import {Router} from "express";
const router = Router();

// controllers
import {registration} from "../controllers/registrationController";

router.post("/", registration);

export {
    router
}