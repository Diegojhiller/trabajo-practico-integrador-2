import express from "express";
import connectDB from "./src/config/database.js";
import articleRouter from './src/routes/article.routes.js';
import userRouter from "./src/routes/user.routes.js";
import tagRouter from "./src/routes/tag.routes.js";
import commentRouter from "./src/routes/comment.routes.js";


const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(express.json());

app.use('/api/users', userRouter );
app.use('/api/article', articleRouter);
app.use('/api/tag', tagRouter);
app.use('/api/comment', commentRouter);


app.listen(PORT, () => {
  console.log(` Servidor mongo escuchando en http://localhost:${PORT}`);
});