import Work from '../models/Work.js';
export const getAll = async (req, res) => {
    const works = await Work.find({}, (err, doc) => {
        if (err) console.log(err);
        console.log(doc);
    });
    res.status(200).json(works);
};
export const create = async (req, res) => {
    const { company, position, date, obligations } = req.body;
    const work = {
        company: company,
        position: position,
        date: date,
        obligations: obligations
    };
    await Work.create(work, (err, doc) => {
        if (err) console.log(err);
        console.log('Object work-list is saved', doc);
    });
    res.status(201).json(req.body);
};
export const deleteWorkById = async (req, res) => {
    const workId = req.body.id;
    await Work.findOneAndDelete({ _id: workId }, undefined, (err, result) => {
        if (err) console.log(err);
        console.log(result);
    });
    res.status(200).json({ message: 'work-list' });
};
//# sourceMappingURL=work-api-controller.js.map
