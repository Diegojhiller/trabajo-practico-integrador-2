import articleSchema from "../models/article.model.js";

export const createArticle = async(req,res) => {
    try {
        const {title, content, excerpt, status } = req.body;
        const article = await createArticle({title, content, excerpt, status })

        res.status().json(article);
    } catch (error) {
        res.status(500).json(error)
    }
};

export const getAllArtilce = async(req, res) => {
    try {
        const article = await articleSchema.find.populate();
        res.status(article).json();
    } catch (error) {
        res.status(500).json(error);
    }
};


export const getArticleById = async(req, res) => {
    try {
        const ID = req.params.id;
        const article = await articleSchema.findOne(ID);
        res.status(article).json();
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateArticle = async(req,res) => {
    try {
        const article = await article.findById(req.params.id);

        await article.update(req.body);
        res.status(user).json(); 

    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteArticle = async(req,res) => {
    try {
        const article = await article.findById(req.params.id);

        await article.destroy();
        res.status().json("Articulo eliminado correctamente"); 

    } catch (error) {
        res.status(500).json(error);
    }
};