import { Request, Response } from 'express';
import Work from '../models/Work.js';

export const getAll = async (req: Request, res: Response) => {
  const works = await Work.find({}, (err, doc) => {
    if (err) console.log(err);

    console.log(doc);
  });

  res.status(200).json(works);
};

export const create = async (req: Request, res: Response) => {
  const {
    company, position, date, obligations,
  } = req.body;

  const work = {
    company,
    position,
    date,
    obligations,
  };

  await Work.create(work, (err, doc) => {
    if (err) console.log(err);

    console.log('Object work-list is saved', doc);
  });

  res.status(201).json(req.body);
};

export const deleteWorkById = async (req: Request, res: Response) => {
  const workId = req.body.id;

  await Work.findOneAndDelete({ _id: workId }, undefined, (err: any, result: any) => {
    if (err) console.log(err);

    console.log(result);
  });

  res.status(200).json({ message: 'work-list' });
};
