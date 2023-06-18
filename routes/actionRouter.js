import express from "express";
import { logOut, loginSuccess } from "../controllers/actionController.js";
const router  = express.Router()

router.get('/',loginSuccess)
router.get('/logout',logOut)

export default router