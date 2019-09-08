var app = require('../server.js');

var token = app.get('token');


var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);



describe('Test of Cases api', function(){
		
	describe('POST /api/cases', function() {
		it('should get cases for case manager', function(done){
			chai.request(app)
			.get('/api/cases')
			.set({'x-access-token': token})
			.end(function(error, response){
				response.should.have.status(200);
				// response.body.should.be.a('object');
				done();
			});
		});
	});
});