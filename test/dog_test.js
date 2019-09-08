var app = require('../server.js');

var token = app.get('token');


var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);



describe('Test of Dog api', function(){
	
	describe('GET /api/dog/', function(){
		it('should return all dog', function(done){
			chai.request(app)
			.get('/api/dog/')
			.set({'x-access-token': token})
			.end(function(error, response) {
				response.should.have.status(200);
				response.body.should.be.a('object');
				// console.log(response.body);
				done();
			});
		});
	});

	describe('GET /api/dog/:id', function() {
		it('should get the dog of given id', function(done) {
			let id = 17;
			chai.request(app)
			.get('/api/dog/' + id)
			.set({'x-access-token': token})
			.end(function(error, response) {
				response.should.have.status(200);
				response.body.should.be.a('object');
				// console.log(response.body);
				done();
			});
		});
	});

	describe('PUT /api/dog/:id', function() {
		it('should update the dog of a given id', function(done) {
			let id = 17;
			chai.request(app)
			.put('/api/dog/'+id)
			.set({'x-access-token': token})
			.send({name: "Jaiky", breed: "Lab", weight: "80", age: 9})
			.end(function(error, response) {
				response.should.have.status(200);
				response.body.should.be.a('object');
				// console.log(response.body);
				done();
			});
		});
	});

	describe('PUT /api/dog/:dog_id/case/:case_id', function(){
		it('should update the Dog with given id and case', function(done){
			let dog_id = 76;
			let case_id = 1091;
			chai.request(app)
			.put('/api/dog/'+dog_id+'/case/'+case_id)
			.set({'x-access-token': token})
			.send({
				name: "test dog test",
				breed: "testing breed",
				age: 2,
				weight: "5"
			})
			.end(function(error, response) {
				response.should.have.status(200);
				// response.body.should.be.a('object');
				// console.log(response.body);
				done();
			});
		});
	});
	
});
