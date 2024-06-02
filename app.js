const express = require("express");
require("dotenv").config();
const app = express();
const userRoute = require("./routes/UserRoutes");
const profileRoute = require("./routes/ProfileRoutes");
const followerRoute = require("./routes/FollowerRoutes");
const AuthRoute = require("./routes/AuthRoutes");
const PostRoute = require("./routes/PostRoutes");
const LikeRoute = require("./routes/LikesRoutes");
const StatisticsRoute = require('./routes/StatisticsRoutes')
const CommentRoute = require('./routes/CommentRoutes')

const port = process.env.APP_PORT || 8000;

app.use(express.json());

app.use("/user", userRoute);
app.use("/profile", profileRoute);
app.use("/follower", followerRoute);
app.use("/auth", AuthRoute);
app.use("/posts", PostRoute);
app.use("/like", LikeRoute);
app.use("/statistics", StatisticsRoute)
app.use("/comment", CommentRoute)

app.use((err, req, res, next) => {
  res.status(400).json({
    message: err.message,
    stack: err.stack,
  });
});

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}....`);
});
