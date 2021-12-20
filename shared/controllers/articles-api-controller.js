import { validationResult } from 'express-validator';
import Articles from '../models/Articles.js';
export const getArticles = async (req, res) => {
    const articles = await Articles.find({}, (err, doc) => {
        if (err) console.log(err);
        console.log(doc);
    });
    res.status(200).json(articles);
};
export const getArticleById = async (req, res) => {
    const _id = req.params.uid;
    const article = await Articles.findOne({ _id }, undefined, undefined, (err, result) => {
        if (err) console.log(err);
        console.log(result);
    });
    res.status(200).json(article);
};
export const updateArticleById = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                code: 400,
                errors: errors.array(),
                message: 'Incorrect data while updating article'
            });
        }
        const { _id, title, subTitle, thumbnail, color, entity, html } = req.body;
        const query = { _id };
        const updateArticle = await Articles.updateOne(query, {
            $set: {
                title,
                subTitle,
                thumbnail,
                color,
                entity,
                html
            }
        });
        return res
            .status(200)
            .json({ code: 201, message: 'Article updated', article: updateArticle });
    } catch (e) {
        return res.status(500).json({ code: 500, message: e });
    }
};
export const createArticle = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                code: 400,
                errors: errors.array(),
                message: 'Incorrect data while creating article'
            });
        }
        const { title, subTitle, thumbnail, color, entity, html } = req.body;
        const date = Date.now();
        const newArticle = await Articles.create({
            title,
            subTitle,
            thumbnail,
            color,
            entity,
            date,
            html
        });
        await newArticle.save();
        return res.status(201).json({ code: 201, message: 'Article created', article: newArticle });
    } catch (e) {
        return res.status(500).json({ code: 500, message: 'Something went wrong' });
    }
};
export const deleteArticleById = async (req, res) => {
    const { id } = req.body;
    await Articles.findOneAndDelete({ _id: id }, undefined, (err, result) => {
        if (err) console.log(err);
        console.log(result);
    });
    res.status(200).json({ message: 'articles' });
};
//# sourceMappingURL=articles-api-controller.js.map
