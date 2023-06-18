import express from 'express'
import session from 'express-session';
import passport from 'passport';
import authRouter from './routes/authRouter.js'
import driveRouter from './routes/driveRouter.js'
import actionRouter from './routes/actionRouter.js'
import shareRouter from './routes/shareRouter.js'
import { verifyToken } from './utils/isValidToken.js';
import './utils/passport.js'

const app = express()

app.use(express.json())

app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use("/",actionRouter);
app.use('/auth/google',authRouter)
app.use('/drive',verifyToken,driveRouter)
app.use('/share',verifyToken,shareRouter)


const port = process.env.PORT || 5000
app.listen(port,()=>{
    console.log(`Server started at port ${port}`)
})
