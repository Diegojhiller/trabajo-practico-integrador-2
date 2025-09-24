import { Schema, model } from "mongoose";

const ObjectId = Schema.Types.ObjectId;

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
        max:500,
        required: false
    },
    status:
    {
        type:String,
        enum: ["published", "archived"],
        default: "published"
    },
    author:{
        type: ObjectId,
        ref: "User"
    },
    tags:[{
        type:ObjectId,
        ref: "Tag"
}],
},
{
    timestamps: true
});

const articleModel = model("article", articleSchema);

export default articleModel;