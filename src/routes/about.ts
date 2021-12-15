import { Router } from 'express';
import {
  addAbout,
  addExperience,
  addSkill,
  deleteAboutById,
  deleteExperienceById,
  deleteSkillById,
  getAbout,
  getAboutProfile,
  getExperience,
  getSkills,
} from '../controllers/customer-api-controller.js';

const router = Router();

router.get('/customer-api/about', getAbout);

router.get('/customer-api/experience', getExperience);

router.get('/customer-api/skills', getSkills);

router.get('/customer-api/profile', getAboutProfile);

router.post('/customer-api/about', addAbout);

router.post('/customer-api/experience', addExperience);

router.post('/customer-api/skills', addSkill);

router.delete('/customer-api/about', deleteAboutById);

router.delete('/customer-api/experience', deleteExperienceById);

router.delete('/customer-api/skills', deleteSkillById);

export default router;
