import express from 'express';
import { validationResult } from 'express-validator';
import userValidators from './userValidators.js';

const server = express();
server.use(express.json()); // make a json body available in express

// middleware request logger
server.use((req, res, next) => {
    console.log(`[REQ] ${req.method} ${req.path}`);
    next();
});

server.post(
    '/users', 
    // remember you can chain middlewares in endpoints too?
    // (req, res, next) => {
    //     console.log("Hi");
    //     next();
    // },
    // some validation middleware (validation rules) coming from the express-validator package
    // body("email").isEmail(),
    // body("password").isEmail(),
    // better to let them come from an array and even from a different file :)
    userValidators, 
    (req, res) => {
        console.log(req.body);

        const result = validationResult(req);
        // console.log(result);
        if (!result.isEmpty()) {
            res.status(400);
            res.json({ 
                // errors: result.errors
                // show only the error messages: 
                errors: result.errors.map(e => e.msg)
            });
            return; // w/ return it skips the next part (res.send(":D")) 
            // alternatively you can use else (instead of a return)
            // Joel prefers to never use else, then you always need to return for the code to finish without just going to the next part
        }

        res.send(":D");
})

server.listen(9070, () => {
    console.log("Listening for requests at http://localhost:6070")
});