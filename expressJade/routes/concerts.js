var express = require('express');
var db = require('../db');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

	db.getConcerts(function(concertsDB, isOk){

		res.render('concerts', {
			title: 'Concerts',
			concerts: concertsDB
		});
	});
});

module.exports = router;
