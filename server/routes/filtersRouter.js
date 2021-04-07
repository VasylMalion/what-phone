// core
import {Router} from "express";
const router = Router();

// controllers
import {filters} from "../controllers/filtersController";

router.post("/", filters)

export {
    router
}
