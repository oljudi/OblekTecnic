const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.signUp = async (req, res, next) => {
  const { email, name, lastName, date, password } = req.body;
  if (email === "" || password === "") {
    res
      .status(400)
      .json({ success: false, msg: "Porfavor, llena todos los campos!!" });
  }

  const userOnDB = await User.findOne({ email });
  if (userOnDB !== null) {
    res
      .status(400)
      .json({ success: false, msg: "Ya existe un usuario con este correo!!" });
  }

  User.register({ email, name, lastName, date }, password)
    .then((user) =>
      res
        .status(201)
        .json({ success: true, msg: "Usuario creado satisfactoriamente", user })
    )
    .catch((err) =>
      res.status(500).json({
        success: false,
        msg: "Algo salio mal, intente de nuevo mas tarde",
        err,
      })
    );
};

exports.logIn = async (req, res, next) => {
  const { user } = req;
  const payload = { check: true };
  const token = jwt.sign(payload, process.env.KEY, { expiresIn: 1440 });
  res.status(200).json({ success: true, user, token });
};

exports.logOut = (req, res) => {
  req.logout();
  res.status(200).json({ success: true, msg: "BAI BAI" });
};
