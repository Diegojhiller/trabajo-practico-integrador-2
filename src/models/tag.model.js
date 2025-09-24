import { Schema, model } from "mongoose";


const tagSchema = new Schema({
    name: {
        type: String,
        unique: true,
        min: 2,
        max: 30,
        trim: true,
    },
    description: {
        type: String,
        max: 200
    }, 
},
{
    timestamps: true
});

const TagModel = model("tag", tagSchema);

export default TagModel;
