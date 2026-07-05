require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { connectDB } = require("./database");
const aiRoutes = require("./routes/aiRoutes");

const app = express();

app.use(cors());

app.use(express.json());
app.use("/api", aiRoutes);

connectDB();

app.get("/", (req, res) => {

    res.send("Agentic AI Hospital Server Running");

});

const PORT = 5000;

app.listen(PORT, () => {

    console.log("Server Running on Port 5000");

});
