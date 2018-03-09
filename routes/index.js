var express = require('express');
var router = express.Router();
const db = require('../database/init')

/* GET home page. */
router.get('/', function(req, res, next) {
	db.user.sync().then(() => {
		 db.user.create({
  	firstname: 'Antoine',
  	lastname: 'FRANCOIS',
  	email: 'antoinefrancois95@gmail.com'
  	}).then(user => {
  		res.json({user: user})
  })
})
 
});

module.exports = router;
