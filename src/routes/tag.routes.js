import { Router } from "express";
import { createTag, deleteTag, getAllTag, getTagById, updateTag } from "../controllers/tag.controllers.js";


const tagRouter = Router();

tagRouter.post('/', createTag);
tagRouter.get('/', getAllTag);
tagRouter.get('/:id', getTagById);
tagRouter.put('/:id', updateTag);
tagRouter.delete('/:id', deleteTag)

export default tagRouter;