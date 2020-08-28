const User = require("../models/User");

exports.users = async (req, res, next) => {
  const users = await User.find();
  if (users) {
    res.status(200).json({ success: true, users });
  } else {
    res
      .status(500)
      .json({
        success: false,
        msg: "Algo salio mal, intenta de nuevo mas tarde",
      });
  }
};
