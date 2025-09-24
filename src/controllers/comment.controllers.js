import commentModel from "../models/comment.model.js";

export const createComment = async(req, res) => {
    try {
        const {content, author, article} = req.body;
        const comment = await create.commment({content, author, article});
        res.status().json(comment);
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getAllComment = async(req, res) => {
    try {
        const comments = await commentModel.find.populate();
        res.status().json(comments)
    } catch (error) {
        res.status(500).json(error)
    }
};

export const getCommentById = async(req, res) => {
    try {
        const ID = req.params.id;
        const comment = await commentModel.findOne(ID)
        res.status(200).json(ID)
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateComment = async(req, res) => {
    try {
        const ID = req.params.id;
        const comment = await commentModel.findByIdAndUpdate(ID)
        res.save(comment);
        res.status(200).json(ID)
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteComment = async(req, res) => {
    try {
        const ID = req.params.id;
        const comment = await commentModel.findByIdAndDelete(ID)
        res.destroy();
        res.status(200).json()
    } catch (error) {
        res.status(500).json(error);
    }
};