import Schema, { model } from "mongoose";

export const ProfileModel = new Schema({
  fitstName: {
    type: String,
    min: 3,
    max:50
  },
  lastName :{
    type: String,
    min: 3,
    max: 50
  },
  biography :{
    type: String,
    min: 3,
    max: 50
  },
  avatarUrl: {
    type: String,
    max: 500
  },
  birthDate: {
    type: Date
  },
});

export const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    min:2,
    maxLenght:50 
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
    value: ["user", "admin"],
    default: "user"
  },
  profile: [ ProfileModel ], 
},
{
  timestamps: true
});

export default model ("User", UserModel);

