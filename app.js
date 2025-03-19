const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs"); 
app.use(express.static(path.join(__dirname, "public"))); 

// Import Routes
const homeRoute = require("./routes/home");
app.use("/", homeRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
