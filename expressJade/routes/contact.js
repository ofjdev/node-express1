var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('contact', {
		title: 'Contact',
		message:'Do not hesitate to contact us!',
		email:'contact AT ike DOT lu' }
	);
});

module.exports = router;
