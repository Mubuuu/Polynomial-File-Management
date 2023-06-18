import jwt from "jsonwebtoken"

export const verifyToken = (req,res,next)=>{
  const {authorization} = req.headers
  const token = authorization.split(" ")[1]
  const secretKey = process.env.JWT_SECTRET
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      res.json('Token verification failed:');
    } else {
      next()
    }
})
}