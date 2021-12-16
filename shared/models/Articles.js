import pkg from 'mongoose';
const { Schema, model } = pkg;
const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true,
        path: 'image'
    },
    color: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    entity: {
        type: JSON,
        required: true
    },
    html: {
        type: JSON,
        required: true
    }
});
export default model('Article', schema);
//# sourceMappingURL=Articles.js.map
