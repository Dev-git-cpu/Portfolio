const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// Initialize Express
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection using Mongoose
mongoose
  .connect("mongodb://localhost:27017/Contact_Details")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err.message);
  });

// Create a Mongoose schema and model for contacts
const contactSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  message: String,
});

const Contact = mongoose.model("Contact", contactSchema);

// Handle POST request to /contact
app.post("/contact", async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  const newContact = new Contact({
    firstName,
    lastName,
    email,
    message,
  });

  try {
    await newContact.save();
    res.status(200).json({ message: "Contact information saved!" });
  } catch (err) {
    res.status(500).json({ error: "Failed to save contact information." });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
