import { Request, Response } from 'express';
export declare const getArticles: (req: Request, res: Response) => Promise<void>;
export declare const getArticleById: (req: Request, res: Response) => Promise<void>;
export declare const updateArticleById: (req: Request, res: Response) => Promise<void>;
export declare const createArticle: (req: Request, res: Response) => Promise<void>;
export declare const deleteArticleById: (req: Request, res: Response) => Promise<void>;
