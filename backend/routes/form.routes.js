const express = require('express');
const app = express();

// Express route
const formExpressRoute = express.Router();

// User schema
let FormSchema = require('../model/form.model');

// Create user
formExpressRoute.route('/save').post((req, res, next) => {
    FormSchema.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});

module.exports = formExpressRoute;
