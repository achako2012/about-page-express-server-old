import pkg from 'mongoose';
const { Schema, model } = pkg;
const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    article: {
        type: String,
        required: true
    }
});
export default model('Experience', schema);
//# sourceMappingURL=Experience.js.map
