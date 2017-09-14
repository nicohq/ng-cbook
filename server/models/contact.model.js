const mongoose = require('mongoose');
// const Joi = require('joi');

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name required']
    },
    phone: {
        type: String,
        required: [true, 'Phone required']
    },
    email: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

ContactSchema.statics = {

    list({ skip = 0, limit, name } = {}) {
        return this.find()
            .sort({ createdAt: -1 })
            .where('name', new RegExp(name, 'i'))
            .skip(+skip)
            .limit(+limit)
            .exec();
    },

    get(id) {
        return this.findById(id)
            .exec()
            .then(user => {
                if (user) {
                    return user;
                }

                return Promise.reject('No user found!');
            });
    }
}

module.exports = mongoose.model('Contact', ContactSchema);
