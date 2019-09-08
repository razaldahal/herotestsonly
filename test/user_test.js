var app = require('../server.js');

var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);

// npm test
// mocha --recusive "./test/*.js"


// Done 

describe('Test Credential of users', function(){
	describe('POST /api/login/', function(){
		it('should return the token if Credential matched', function(done){
			chai.request(app)
			.post('/api/login/')
			.send({username: 'rajal', password: "1234567"})
			.end(function(error, response) {
				response.should.have.status(200);
				response.body.should.be.a('object');
				// console.log(response.body);
				done();
			});
		});
	});

	// describe('GET /api/accounts/reset-password', function() {
	// 	it('should return a token', function(done) {
	// 		chai.request(app)
	// 		.get('/api/accounts/reset-password?email=dahlrajl@gmail.com')
	// 		.end(function(error, response) {
	// 			response.should.have.status(200);
	// 			response.body.should.be.a('object');
	// 			done();
	// 		});
	// 	});
	// });

// 	describe('POST /api/accounts/reset-password/', function() {
// 		it('should post a user reset password', function(done) {
// 			let token = "46c42e6b-a1d3-3c4d-b03c-fabacd2c8b5b";
// 			chai.request(app)
// 			.post('/api/accounts/reset-password/'+token)
// 			.send({
// 				new_password: "1234567",
// 				new_password_repeat: "1234567"
// 			})
// 			.end(function(error, response){
// 				response.should.have.status(200);
// 				response.body.should.be.a('object');
// 				done();
// 			});
// 		});
// 	});
// });

});