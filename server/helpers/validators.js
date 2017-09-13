const Joi = require('joi');

const contactJoiSchema = Joi.object({
    name: Joi.string().trim().min(3).max(30).required(),
    phone: Joi.string().trim().replace(/-/g, '').min(7).max(12).required(),
    email: Joi.string().email()
}).unknown().required();

const validators = {
    createContact: {
        body: contactJoiSchema
    },

    updateContact: {
        body: contactJoiSchema,
        params: Joi.object({
            contactId: Joi.string().hex().required()
        })
    }
}

module.exports = validators;
