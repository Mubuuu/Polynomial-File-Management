import passport from "passport";
import jwt from "jsonwebtoken";
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { CLIENT_ID, CLIENT_SECRET_ID, CallBackURL } from "./constants.js";

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID:CLIENT_ID,
    clientSecret:CLIENT_SECRET_ID,
    callbackURL: CallBackURL,
    passReqToCallback   : true
},
function(request, accessToken, refreshToken, profile, done) {
  const payload = {
    id: profile.id,
    name: profile.displayName,
  };
  const secret = 'secret'
  const token = jwt.sign(payload,secret,{ expiresIn: '30m' })
  const user = {token:token, id: profile.id, displayName: profile.displayName };
    done(null, user);
}
));