const AppController = require('../controllers/app.controller');

module.exports = function(app){
  app.get('/api', AppController.index)
}
