var app = require('../server.js');

var token = app.get('token');


// unit testing
var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);



describe('Test of Task api', function(){
	
	describe('GET /api/task/', function(){
		it('should get all task', function(done){
			chai.request(app)
			.get('/api/task/')
			.set({'x-access-token': token})
			.end(function(error, response) {
				response.should.have.status(200);
				response.body.should.be.a('object');
				// console.log(response.body);
				done();
			});
		});
	});


	describe('PUT /api/task/:id', function() {
		it('should update task of given id', function(done) {
			let id = 1;
			chai.request(app)
			.get('/api/task/'+id)
			.set({'x-access-token': token})
			.send({
				status: "not active"
			})
			.end(function(error, response) {
				response.should.have.status(200);
				response.body.should.be.a('object');
				// console.log(response.body)
				done();
			});
		});
	});


	describe('POST /api/tasks/:id/activities/', function() {
		it('should post task to given id', function(done) {
			let id = 3;
			chai.request(app)
			.post('/api/tasks/'+id+'/activities/')
			.set({'x-access-token': token})
			.send({
				task_id: id,
				description: "test description of task"
			})
			.end(function(error, response) {
				response.should.have.status(200);
				response.body.should.be.a('object');
				// console.log(response.body)
				done();
			});
		});
	});
});