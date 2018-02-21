var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('concerts', {
		title: 'Concerts',
		concerts: [
			{'ConcertName':'testA',
			'InterpretName':'testB',
			'Time':'2018-02-23 21:00:00.000Z',
			'Place':'Place Test',},

			{'ConcertName':'testC',
			'InterpretName':'testD',
			'Time':'Long Time Text',
			'Place':'Place Test 2',},
		],
	});
});

module.exports = router;
