const { Schema, model } = require("mongoose");
const PLM = require("passport-local-mongoose");

const userSchema = new Schema(
  {
    email: String,
    name: String,
    lastName: String,
    date: String,
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.plugin(PLM, { usernameField: "email" });

module.exports = model("User", userSchema);
