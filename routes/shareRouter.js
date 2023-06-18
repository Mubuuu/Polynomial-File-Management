import express from "express";
import { shareFileWithGmailUsers} from '../controllers/shareController.js'
const router = express.Router()

router.post('/',shareFileWithGmailUsers)

export default router