var request = require ('request');

module.exports = {
	getMovies: getMovies
	// getRestaurantById: getRestaurantById
}

function getMovies (req, res){
	request('http://api.usergrid.com/chgsilva/sandbox/movies', function (err, response, body) {
		res.send(body);
	});
}

// function getRestaurantById(req, res){
// 	var id = req.swagger.params.id.value;
// 
// 	async.parallel({x
// 		function (callback) {
// 			request('http://api.usergrid.com/chgsilva/sandbox/restaurants?ql=restID=' + id, function (err, response, bocy) {
// 			res.send(body);
// 			});
// 		},
// 
// }