import tagSchema from "../models/tag.model.js";

export const createTag = async (req,res) => {
    try {
        const {name, description} = req.body;
        const tag = await tag.create({name, description});
        res.status().json(tag)

    } catch (error) {
        res.status().json(error);
    }
};

export const getAllTag = async(req, res) => {
    try {
        const tags = await tagSchema.find.populate();
        res.status().json(tags)
    } catch (error) {
        res.status(500).json(error);
    }
};

export const getTagById = async(req, res) => {
    try {
        const ID = req.params.id;
        const tag = await tagSchema.findOne(ID)
        res.status(200).json(ID)
    } catch (error) {
        res.status(500).json(error);
    }
};

export const updateTag = async(req, res) => {
    try {
        const ID = req.params.id;
        const tag = await tagSchema.findByIdAndUpdate(ID)
        res.save();
        res.status(200).json(ID)
    } catch (error) {
        res.status(500).json(error);
    }
};

export const deleteTag = async(req, res) => {
    try {
        const ID = req.params.id;
        const tag = await tagSchema.findByIdAndDelete(ID)
        res.destroy();
        res.status(200).json()
    } catch (error) {
        res.status(500).json(error);
    }
};