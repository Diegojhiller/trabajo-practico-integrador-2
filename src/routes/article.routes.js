import { Router }  from "express";
import { createArticle, deleteArticle, getAllArtilce, getArticleById, updateArticle } from "../controllers/article.controllers.js";

const articleRouter = Router();

articleRouter.post('/', createArticle);
articleRouter.get('/', getAllArtilce);
articleRouter.get('/:id' , getArticleById);
articleRouter.put('/:id', updateArticle);
articleRouter.delete('/:id', deleteArticle)

export default articleRouter;