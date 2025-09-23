import express from "express";
import connectDB from "./src/config/database.js";
import { Router } from "express";
import router from "./src/routes/article.routes.js";
import router from "./src/routes/user.routes.js";
const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(express.json());

app.use('/api/users', router );
app.use('/api/articel', router);


app.use("/", (req, res) => {
  res.send("El servidor esta funcionando correctamente");
});

app.listen(PORT, () => {
  console.log(` Servidor mongo escuchando en http://localhost:${PORT}`);
});