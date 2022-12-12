const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors")
require("dotenv").config();
const express = require("express");

const userRouter = require("./routes/useRoutes")

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use("/api", userRouter);

const port = process.env.PORT || 8000;
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});
