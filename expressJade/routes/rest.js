var express = require('express');
var db = require('../db');
var url = require('url');

var router = express.Router();

function genericResponse(response, text) {
	response.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
	response.write(text);
	response.end();
}

//'application/json; charset=utf-8'

/*function responseUTF8(response, text) {
	response.writeHead(200,
		{'Content-Type': 'text/plain; charset=utf-8'});
	response.write(text);
	response.end();
}*/

// http://localhost:3000/rest/addConcert?ConcertName=name&InterpretName=interpret&Place=village&Time=2018-06-16:00:00.000Z
router.get('/addConcert', function(req, res, next) {

	var URL = req.url;
	//console.log("URL: "+URL);
	var parsedURL = url.parse(URL, true);
	//console.log("Parsed URL: "+parsedURL);
	var params = parsedURL.query; // true to get the Query Parameter String, already parsed

	var ConcertName 	= params.ConcertName;
	var InterpretName 	= params.InterpretName;
	var Place		 	= params.Place;
	var Time 			= params.Time;
	//console.log("ConcertName: "+ConcertName+", InterpretName: "+InterpretName+", Place: "+Place+", Time: "+Time);

	var concert = {
		'ConcertName': 		ConcertName,
		'InterpretName': 	InterpretName,
		'Place': 			Place, 
		'Time': 			Time,
	};

	var callbackResult = function(err, is_ok){
		
		if ( ! is_ok ){
			genericResponse(res, "Could NOT add the Concert: "+ConcertName+
				' because:\n'+err);

		} else {
			genericResponse(res, "Concert added successfully: "+ConcertName);
		}

	};

	db.addConcert(concert, callbackResult);
});

// http://localhost:3000/rest/getConcerts
router.get('/getConcerts', function(req,res, next){

	var callbackResult = function(result, is_ok){

		if ( ! is_ok ){
			if(result === null)
				genericResponse(res, "result === null: "+result);
			else if(result === undefined)
				genericResponse(res, "result === undefined: "+result);

		} else {
			if( result.length == 0 )
				genericResponse(res, "No concerts added, yet.");
			else {
				console.log(JSON.stringify(result));
				genericResponse(res, JSON.stringify(result)); //result.toString() );		
			}
		}
	};

	db.getConcerts(callbackResult);
});

module.exports = router;
