const { check} = require("express-validator");

const validationText = [
  check('text')
    .isString()
    .trim()
    .notEmpty()
];

module.exports = {
  validationText
};