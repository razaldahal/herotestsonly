var app = require('../server.js');

var token = app.get('token');


var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);



describe('Test of Activity Category api', function(){
	
	describe('GET /api/activity/category', function(){
		it('should return list all activity category', function(done){
			chai.request(app)
			.get('/api/activity/category')
			.set({'x-access-token': token})
			.end(function(error, response) {
				response.should.have.status(200);
				response.body.should.be.a('array');
				// console.log(response.body);
				done();
			});
		});
	});

	describe('POST /api/activity/category', function() {
		it('should post a activity category', function(done) {
			chai.request(app)
			.post('/api/activity/category')
			.set({'x-access-token': token})
			.send({
				name: "test_category1",
				description: "category for testing"
			})
			.end(function(error, response) {
				response.should.have.status(200);
				// response.body.should.be.a('array');
				done();
			});
		});
	});

	
	describe('PUT /api/activity/category/:id', function() {
		it('should update a activity category of given id', function(done) {
			let id = 6;
			chai.request(app)
			.put('/api/activity/category/'+id)
			.set({'x-access-token': token})
			.send({
				name: "test_category",
				description: "category added for unit testings"
			})
			.end(function(error, response) {
				response.should.have.status(200);
				// response.body.should.be.a('array');
				done();
			});
		});
	});

	describe('DESTROY /api/activity/category/:id', function() {
		it('should delete the activity category of given id', function(done) {
			let id=7;
			chai.request(app)
			.delete('/api/activity/category/'+id)
			.set({'x-access-token': token})
			.end(function(error, response){
				response.should.have.status(200);
				done();
			});
		});
	});
});