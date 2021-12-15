import pkg from 'mongoose';
const { Schema, model } = pkg;
const schema = new Schema({
    title: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
});
export default model('Skills', schema);
//# sourceMappingURL=Skills.js.map
