import { Router } from "express";
import { createUser, getAllUser, getUserById, updateUser, deleteUser } from "../controllers/user.controllers.js";


const userRouter = Router();

userRouter.get('/', getAllUser );
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser );

export default userRouter;