import { celebrate, Joi, Segments } from 'celebrate';
import { ENUM_ROLES } from '../utils/constants.js';

const create = celebrate({
  [Segments.BODY]: Joi.object().keys({
      first_name: Joi.string().alphanum().required(),
      last_name: Joi.string().alphanum().required(),
      email: Joi.string().email().required(),
      phone: Joi.string().required(),
      password: Joi.string().required(),
      biography: Joi.string().required(),
      role: Joi.string().valid(...ENUM_ROLES).default('GUEST'),
  })
});

export default {
    create
}
