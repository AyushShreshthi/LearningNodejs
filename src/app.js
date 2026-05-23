import express from "express"

const app = express();

app.use(express.json()); // to parse incoming JSON data in request bodies

import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"


app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter);

// http://localhost:4000/api/v1/users/register
// http://localhost:4000/api/v1/users/login
// http://localhost:4000/api/v1/users/logout

// http://localhost:4000/api/v1/posts/create
// http://localhost:4000/api/v1/posts/getPosts
// http://localhost:4000/api/v1/posts/updatePost/:id
// http://localhost:4000/api/v1/posts/deletePost/:id

export default app;