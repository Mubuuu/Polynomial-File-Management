import express from 'express'
import { upload } from '../utils/drive.js'
import { deleteAllFiles, getAllFiles, uploadFile } from '../controllers/driveController.js'
const router = express.Router()

router.route('/').get(getAllFiles).post(upload.any(),uploadFile).delete(deleteAllFiles)

export default router