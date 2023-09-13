const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Use extended to parse URL-encoded data.
app.use(cors());

mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("error", (error) => {
  console.error("DB connection error:", error);
});
mongoose.connection.once("open", () => {
  console.log("DB connected");
});

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// Routes

// Register a new user
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      res.status(400).json({ message: "User already registered" });
    } else {
      const newUser = new User({
        name,
        email,
        password,
      });
      await newUser.save();
      res.status(201).json({ message: "Successfully registered, please log in now." });
    }
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });

    if (user) {
      if (password === user.password) {
        res.status(200).json({ message: "Login successful", user: user });
      } else {
        res.status(401).json({ message: "Password didn't match" });
      }
    } else {
      res.status(404).json({ message: "User not registered" });
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Server error" });
  }
});

app.listen(9002, () => {
  console.log("Server started at port 9002");
});
