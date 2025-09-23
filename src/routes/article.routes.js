import { Router } from "express";
import { createArticle, deleteArticle, getAllArtilce, getArticleById, updateArticle } from "../controllers/article.controllers";

const router = Router ();

router.post('/', createArticle);
router.get('/', getAllArtilce);
router.get('/:id' , getArticleById);
router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle)

export default router;