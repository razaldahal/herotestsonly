var app = require('../server.js');

var token = app.get('token');


var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);




describe('Test of Search api', function(){
		
	describe('GET /api/search', function() {
		it('should get all search', function(done){
			let q="Jules"
			let object_type="dog"
			chai.request(app)
			.get('/api/search?q='+q+'&object_type='+object_type)
			.set({'x-access-token': token})
			.end(function(error, response){
				response.should.have.status(200);
				response.body.should.be.a('array');
				response.body[0].dog_name.should.be.equal(q)
				// console.log(response.body)
				done();
			});
		});
	});
});