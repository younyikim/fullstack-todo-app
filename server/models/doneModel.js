const mongoose = require('mongoose');

const doneSchema = new mongoose.Schema(
    {
        text: {
            type: String,
            require: true,
        },
    },
    { collection: 'done' }
);

module.exports = mongoose.model('Done', doneSchema);
