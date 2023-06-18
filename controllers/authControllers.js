import passport from "passport";
import '../utils/passport.js'

export const googleLogin = passport.authenticate("google", { scope: ["profile", "email"] })
  
export const googleCallback = passport.authenticate("google", {
  successRedirect: "/",
  failureRedirect: "/login",
})