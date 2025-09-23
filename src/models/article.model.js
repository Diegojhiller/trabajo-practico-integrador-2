import { Schema, model } from "mongoose";

const ObjectId = Schema.type.ObjectId;

const articleSchema = new Schema({
    title:{
        type: String,
        min:3,
        max:200
    },
    content: {
        type: String,
        min:50
    },
    excerpt:{
        type:String,
        max:500
    },
    statud:
    {
        type:String,
        enum: ["published", "archived"],
        default: "published"
    },
    author:{
        type: ObjectId,
        ref: "User"
    },
    tags:{
        type: ObjectId,
        ref: "Tag"
    },
},
{
    timestamps: true
});


export default model("Article", articleSchema);