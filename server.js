const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3000;
// Replace this with your real connection string from MongoDB Atlas
const MONGODB_URI = "mongodb+srv://gkapoya_db_user:4u0uKPqZ9dwPFsiO@cluster0.vzbbhaj.mongodb.net/?appName=Cluster0";
app.use(cors());
app.use(express.json());
mongoose
    .connect(MONGODB_URI)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => {
        console.error("MongoDB connection error:", err.message);
        process.exit(1);
    });
// Simple test route
app.get("/", (req, res) => {
    res.json({ message: "WS-5 Movie API running" });
});
app.listen(PORT, () => {
    console.log(`API listening on http://localhost:${PORT}`);
});