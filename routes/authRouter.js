import express from 'express'
import { googleCallback, googleLogin } from '../controllers/authControllers.js'
import '../utils/passport.js'
const router = express.Router()

router.get('/',googleLogin)
router.get('/callback',googleCallback)

export default router