import express from "express";
import connectDB from "./src/config/database.js";
import articleRouter from './src/routes/article.routes.js';
import userRouter from "./src/routes/user.routes.js";
import tagRouter from "./src/routes/tag.routes.js";
import commentRouter from "./src/routes/comment.routes.js";
import cookieParser from "cookie-parser";
import cors from 'cors';
import authenRouter from "./src/routes/authen.routes.js";

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use('/api/users', userRouter );
app.use('/api/article', articleRouter);
app.use('/api/tag', tagRouter);
app.use('/api/comment', commentRouter);
app.use('/api/authen', authenRouter )

app.listen(PORT, () => {
  console.log(` Servidor mongo escuchando en http://localhost:${PORT}`);
});