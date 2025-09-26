import { Schema, model } from "mongoose";
import { hashPassword } from '../helper/bcrypt.helper.js';


//esquema enbebido en el esquema de usuario
const ProfileModel = new Schema({
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

const userSchema = new Schema({
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
  deleteAt: {
    type: Date,
    default: null
  },
  profile: [ ProfileModel ], 
  
},
 { timestamps: true
});

// Pre-save hook para hashear password
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await hashPassword(this.password);
  next();
});

const UserModel = model("User", userSchema)

export default UserModel;

