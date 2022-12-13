const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors")
require("dotenv").config();
const express = require("express");

const inmueblesRoutes = require("./routes/inmuebles");

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.get("/error", (req, res) => {
    res.status(400).json({ error: "Error inesperado" });
  });


app.use("/api", inmueblesRoutes);

const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});
