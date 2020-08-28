const router = require("express").Router();

const { users } = require("../controllers/user.constroller");
const { haveJWTValid } = require("../middlewares/auth");

// USERS ROUTE
router.post("/getUsers", haveJWTValid, users);

module.exports = router;
