const express = require("express");
const morgan = require("morgan");
const cors=require("cors")
const app = express();
const userRouter = require("./routes/userRoutes");
const postRouter = require("./routes/postRoutes");
const errorController=require("./controller/errorController")

app.use(cors())
app.use(express.json())
app.use(morgan("dev"));
app.use('/api/v1/users',userRouter);
app.use('/api/v1/posts',postRouter)

app.use(errorController)
module.exports = app;
