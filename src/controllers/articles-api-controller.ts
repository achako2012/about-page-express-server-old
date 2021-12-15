import { Request, Response } from 'express';
import Articles from '../models/Articles.js';

export const getArticles = async (req: Request, res: Response) => {
    const articles = await Articles.find({}, (err, doc) => {
        if (err) console.log(err);

        console.log(doc);
    });

    res.status(200).json(articles);
};

export const getArticleById = async (req: Request, res: Response) => {
    const id = req.params.uid;

    const article = await Articles.findOne(
        { _id: id },
        undefined,
        undefined,
        (err: any, result: any) => {
            if (err) console.log(err);

            console.log(result);
        }
    );

    res.status(200).json(article);
};

export const updateArticleById = async (req: Request, res: Response) => {
    const { id, title, subTitle, thumbnail, color, entity, html } = req.body;

    const query = { _id: id };

    const update = {
        $set: {
            title,
            subTitle,
            thumbnail,
            color,
            entity,
            html
        }
    };

    await Articles.updateOne(query, update);

    res.status(200).json({ message: 'updated' });
};

export const createArticle = async (req: Request, res: Response) => {
    const { title, subTitle, thumbnail, color, entity, html } = req.body;
    const date = Date.now();

    const newArticle = {
        title,
        subTitle,
        thumbnail,
        color,
        entity,
        date,
        html
    };

    // TODO solve this
    const foo = await Articles.create(newArticle);
    // Articles.create(newArticle, (err, doc) => {
    //
    //     if (err)
    //         console.log(err);
    //
    //     console.log("Object ARTICLE is saved", doc);
    // })

    res.status(201).json(foo);
};

export const deleteArticleById = async (req: Request, res: Response) => {
    const { id } = req.body;

    await Articles.findOneAndDelete({ _id: id }, undefined, (err: any, result: any) => {
        if (err) console.log(err);

        console.log(result);
    });

    res.status(200).json({ message: 'articles' });
};
