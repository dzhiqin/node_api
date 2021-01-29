var express = require('express')
var router = express.Router()
router.use(function timeLog (req, res, next) {
  console.log('Time', Date.now())
  next()
})
/* GET home page. */
router.get('/', function (req, res, next) {
  res.redirect('/catalog')
})

router.get('/about', function (req, res, next) {
  res.send('about wiki')
})

module.exports = router
