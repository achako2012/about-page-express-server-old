import { Router } from 'express';
import {
    createArticle,
    deleteArticleById,
    getArticleById,
    getArticles,
    updateArticleById
} from '../controllers/articles-api-controller.js';
const router = Router();
router.get('/articles-api/articles-list', getArticles);
router.post(`/articles-api/articles-list`, createArticle);
router.put(`/articles-api/articles-list`, updateArticleById);
router.delete(`/articles-api/articles-list`, deleteArticleById);
router.get('/articles-api/article/:uid', getArticleById);
export default router;
//# sourceMappingURL=articles.js.map
