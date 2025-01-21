import doctor from "../DoctorSchema.js";
import User from "../User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY
  );
};
export const register = async (req, res) => {
  const { email, password, name, role, photo, gender } = req.body;

  try {
    let user = null;
    if (role === "patient") {
      user = await User.findOne({ email });
    } else if (role === "doctor") {
      user = await doctor.findOne({ email });
    }
    if (user) {
      return res.status(400).json({ message: "user already exists" });
    }
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    if (role === "patient") {
      user = new User({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }
    if (role === "doctor") {
      user = new doctor({
        name,
        email,
        password: hashPassword,
        photo,
        gender,
        role,
      });
    }
    await user.save();
    res
      .status(200)
      .json({ success: true, message: "User successfully created" });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server Error",
      error: err.message,
    });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = null;
    const patient = await User.findOne({ email });
    const doctoruser = await doctor.findOne({ email });
    if (patient) {
      user = patient;
    }
    if (doctoruser) {
      user = doctoruser;
    }
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordMatch = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordMatch) {
      return res
        .status(400)
        .json({ status: false, message: "invalid credentials" });
    }
    const token = generateToken(user);
    const { password, role, appointments, ...rest } = user._doc;
    res.status(200).json({
      status: true,
      message: "successfully login",
      token,
      data: { ...rest },
      role,
    });
  } catch (err) {
    res
      .status(500)
      .json({ status: false, message: "failed to login", error: err.message });
  }
};
