import { Router } from "express";
import { createUser, getAllUser, getUserById, updateUser, deleteUser } from "../controllers/user.controllers";


const router = Router();

router.get('/', getAllUser );
router.get('/: id', getUserById);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/: id', deleteUser );

export default Router;