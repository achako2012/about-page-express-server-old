import pkg from 'mongoose';
const { Schema, model } = pkg;
const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    intro: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    }
});
export default model('About', schema);
//# sourceMappingURL=About.js.map