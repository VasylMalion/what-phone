// core
import {Router} from "express";
const router = Router();

// controllers
import {
    addPhone,
    getAllPhones,
    getOnePhone
} from "../controllers/findPhoneController";

router.post("/", addPhone);
router.get("/", getAllPhones);
router.get("/:id", getOnePhone);

export {
    router
}