const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("")
.then(() => {
    console.log("MongoDB is connected successfully.");
})
.catch((err) => {
    console.log(err);
});

const movieRoutes = require("./routes/movies");
app.use("/api/movies", movieRoutes);
app.use(express.static("public"));
app.listen(3000, () => {
    console.log("Server running on port 3000");
});
