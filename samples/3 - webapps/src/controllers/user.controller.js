var express = require('express')
var router = express.Router()
const UserService = require('../services/user.service');

userService = new UserService();

// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res) {
  console.log(userService.addUser());
  res.send(['Felipe', 'Eduardo', 'Steban']);
})
// define the about route
router.get('/about', function (req, res) {
  res.send('Lista users')
})

module.exports = router