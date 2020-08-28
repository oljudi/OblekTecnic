const jwt = require("jsonwebtoken");

exports.isLoggedIn = (req, res, next) => {
  req.isAuthenticated()
    ? next()
    : res.status(401).json({ msg: "Log in first" });
};

exports.haveJWTValid = (req, res, next) => {
  const token = req.headers["access-token"];
  console.log(token);
  if (token) {
    jwt.verify(token, process.env.KEY, (err, decoded) => {
      if (err) {
        console.log(err);
        res.status(401).json({ msg: "Peticion denegada" });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    res.status(401).json({ msg: "Peticion denegada" });
  }
};
