const Joi = require('joi');
require('dotenv').config();

const envSchema = Joi.object({
    NODE_ENV: Joi.string().allow(['development', 'production', 'test']).default('development'),
    PORT: Joi.number().default(3000),
    MONGO_URL: Joi.string().required()
}).unknown().required();

const { error, value: env } = Joi.validate(process.env, envSchema);

if (error) {
    throw new Error(`Invalid config schema: ${error.message}`);
}

const config = {
    ENV: env.NODE_ENV,
    PORT: env.PORT,
    MONGO_URL: env.MONGO_URL
};

module.exports = config;
