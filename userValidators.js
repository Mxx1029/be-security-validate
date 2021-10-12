import { body, header } from 'express-validator';

const userValidators = [
    // write-the-custom-message-like-this to facilitate translations for the frontend
    body("email").isEmail().withMessage("email-invalid"),
    // body("password").isLength({ min: 8, max: undefined }).withMessage("password is too short"),
    body("password").isLength({ min: 8 }).withMessage("password-less-than-8-characters"),
    body("password").isLength({ max: 28 }).withMessage("password-too-long"),
    body("password").isStrongPassword().withMessage("password-too-weak"),
    header("X-Test").isLength(3).withMessage("check-header-x-test")
];

export default userValidators;