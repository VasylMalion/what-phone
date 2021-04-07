// cores
import {Router} from "express";
const router = Router();

// controllers
import {
    addFavouritePhone,
    initialFavoritePhones
} from "../controllers/yourPhonesController";

router.post("/", addFavouritePhone);
router.post("/initial", initialFavoritePhones);

export {
    router
}