import pkg from 'mongoose';
const { Schema, model } = pkg;
const schema = new Schema({
    company: {
        type: String,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    obligations: {
        type: String,
        required: true
    }
});
export default model('Work', schema);
//# sourceMappingURL=Work.js.map