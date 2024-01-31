const { check} = require("express-validator");
const { validatorResult } = require("../middlewares/validation-result.js");

const validationText = [
  check('text')
    .isString()
    .trim()
    .notEmpty(),
    validatorResult
];

module.exports = {
  validationText
};