import About from '../models/About.js';
import Experience from '../models/Experience.js';
import Skills from '../models/Skills.js';
export const getAbout = async (req, res) => {
    const about = await About.find({}, (err, doc) => {
        if (err) console.log(err);
        console.log(doc);
    });
    res.status(200).json(about);
};
export const getExperience = async (req, res) => {
    const experienceList = await Experience.find({}, (err, doc) => {
        if (err) console.log(err);
        console.log(doc);
    });
    res.status(200).json(experienceList);
};
export const getSkills = async (req, res) => {
    const skills = await Skills.find({}, (err, doc) => {
        if (err) console.log(err);
        console.log(doc);
    });
    res.status(200).json(skills);
};
export const getAboutProfile = async (req, res) => {
    const aboutProfile = await About.find({}, (err, doc) => {
        if (err) console.log(err);
        console.log(doc);
    });
    res.status(200).json(aboutProfile);
};
export const addAbout = async (req, res) => {
    const { name, intro, position, title, article } = req.body;
    const about = {
        name: name,
        intro: intro,
        position: position,
        title: title,
        article: article
    };
    await About.create(about, (err, doc) => {
        if (err) console.log(err);
        console.log('Object about is saved', doc);
    });
    res.status(201).json(req.body);
};
export const addExperience = async (req, res) => {
    const { title, article } = req.body;
    const experience = {
        title: title,
        article: article
    };
    await Experience.create(experience, (err, doc) => {
        if (err) console.log(err);
        console.log('Object about is saved', doc);
    });
    res.status(201).json(req.body);
};
export const addSkill = async (req, res) => {
    const { title, value } = req.body;
    const skill = {
        title: title,
        value: value
    };
    await Skills.create(skill, (err, doc) => {
        if (err) console.log(err);
        console.log('Object about is saved', doc);
    });
    res.status(201).json(req.body);
};
export const deleteAboutById = async (req, res) => {
    const aboutId = req.body.id;
    await About.findOneAndDelete({ _id: aboutId }, undefined, (err, result) => {
        if (err) console.log(err);
        console.log(result);
    });
    res.status(200).json({ message: `about by id: ${aboutId} deleted!` });
};
export const deleteExperienceById = async (req, res) => {
    const experienceId = req.body.id;
    await Experience.findOneAndDelete({ _id: experienceId }, undefined, (err, result) => {
        if (err) console.log(err);
        console.log(result);
    });
    res.status(200).json({ message: `about by id: ${experienceId} deleted!` });
};
export const deleteSkillById = async (req, res) => {
    const skillId = req.body.id;
    await Skills.findOneAndDelete({ _id: skillId }, undefined, (err, result) => {
        if (err) console.log(err);
        console.log(result);
    });
    res.status(200).json({ message: `about by id: ${skillId} deleted!` });
};
//# sourceMappingURL=customer-api-controller.js.map
