import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please Provide a email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please Provide a password"],
  },
  //   Check either the user is verified or not
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  forgotPasswordToken: String,
  forgotPasswordTokenExpiry: Date,
  verifyToken: String,
  verifyTokenExpiry: Date,
});

// If the model is already created in the database then access that if not then create the new one.
const User = mongoose.models.users || mongoose.model("users", userSchema);

export default User;
