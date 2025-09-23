import express from "express";
import connectDB from "./src/config/database.js";
import { userRouter } from "express";

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();
app.use(express.json());

app.use('/api/users', userRouter );

app.use("/", (req, res) => {
  res.send("El servidor esta funcionando correctamente");
});

app.listen(PORT, () => {
  console.log(` Servidor mongo escuchando en http://localhost:${PORT}`);
});