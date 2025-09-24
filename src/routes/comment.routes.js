import { Router } from "express";
import { createComment, deleteComment, getAllComment, getCommentById, updateComment } from "../controllers/comment.controllers.js";

const commentRouter = Router();

commentRouter.post('/', createComment);
commentRouter.get('/', getAllComment);
commentRouter.get('/:id', getCommentById);
commentRouter.put('/:id', updateComment);
commentRouter.delete('/:id', deleteComment);

export default commentRouter;