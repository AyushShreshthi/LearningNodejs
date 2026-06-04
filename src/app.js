import express from "express"
import errorHandler from "./middleware/errorhandler.js";

const app = express();

app.use(express.json()); // to parse incoming JSON data in request bodies
app.use(express.urlencoded({ extended: true })); // to parse URL-encoded data from forms

import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"


app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

app.use(errorHandler);

// http://localhost:4000/api/v1/users/register
// http://localhost:4000/api/v1/users/login
// http://localhost:4000/api/v1/users/logout

// http://localhost:4000/api/v1/posts/create
// http://localhost:4000/api/v1/posts/getPosts
// http://localhost:4000/api/v1/posts/updatePost/:id
// http://localhost:4000/api/v1/posts/deletePost/:id

export default app;