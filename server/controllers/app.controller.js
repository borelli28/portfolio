const { App } = require('../models/app.model');

module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}
