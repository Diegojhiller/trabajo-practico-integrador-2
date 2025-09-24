import { Schema,  model } from "mongoose";

const ObjectId = Schema.Types.ObjectId;

const commentSchema = new Schema({
    content: {
        type:String,
        min:5,
        max: 500
    },
    author: {
        type: ObjectId,
        ref: "User"
    },
    article: {
        type: ObjectId,
        ref: "Article"
    },
},
{
    timestamps: true
});

const commentModel = model("comment", commentSchema)

export default commentModel ;
