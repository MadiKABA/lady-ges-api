import * as Joi from 'joi';

export const validationDotEnv = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production'),
  PORT: Joi.number().default(3000),
  APP_NAME: Joi.string(),
  DATABASE_URL: Joi.string(),
  BASE_URL: Joi.string(),
  MAIL_EMAIL: Joi.string(),
  MAIL_HOST: Joi.string(),
  MAIL_PORT: Joi.string(),
  MAIL_USERNAME: Joi.string(),
  MAIL_PASSWORD: Joi.string(),
});
