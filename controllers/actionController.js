export const loginSuccess = (req, res) => {
  if (!req.user) {
    res.json("please login with http://localhost:5000/auth/google/");
  }
  res.json(req.user);
};
export const  logOut = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
};
