import mongoose from "mongoose";
import  dotenv  from "dotenv";

dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/proyecto-integrador-mongo");
        console.log("Estamos conectados a mongo")
    } catch (error) {
        console.error("No se pudo concetar a mongo: ", error);
    }
};

export default connectDB;