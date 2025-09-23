import { userRouter } from "express";
import { createUser, getAllUser, getUserById, updateUser, deleteUser } from "../controllers/user.controllers";


const router = userRouter();

router.get('/', getAllUser );
router.get('/: id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/: id', deleteUser );

export default userRouter;