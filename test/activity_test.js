var app = require('../server.js');

var token = app.get('token');


var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);



describe('Test of Activity api', function(){
	
	describe('GET /api/activity', function(){
		it('should return list all activity', function(done){
			chai.request(app)
			.get('/api/activity')
			.set({'x-access-token': token})
			.end(function(error, response) {
				response.should.have.status(200);
				response.body.should.be.a('array');
				// console.log(response);
				done();
			});
		});
	}); 

	
	describe('GET /api/activity/:id', function() {
		it('should return a activity of given id', function(done){
			let id = 22;
			chai.request(app)
			.get('/api/activity/'+id)
			.set({'x-access-token': token})
			.end(function(error, response) {
				response.should.have.status(200);
				response.body.should.be.a('object');
				// console.log(response.body);
				done();
			});
		});
	});


	// describe('POST /api/activity', function() {
	// 	it('should post a activity', function(done) {
	// 		var object = new Object
	// 		object.id=123
	// 		var parameters= new Array
	// 		chai.request(app)
	// 		.post('/api/activity')
	// 		.set({'x-access-token': token})
	// 		.send({
	// 			order_id: 21442,
	// 			activity_type: "4",
	// 			name: "testing activity",
	// 			note: "test description",
	// 			object:{id:"",value:""},
	// 			parameters:[]
				
	// 		})
	// 		.end(function(error, response) {
	// 			console.log(response)
	// 			response.should.have.status(200);
				
	// 			// response.body.should.be.a('object');
	// 			done();
	// 		});
	// 	});
	// });


	//  describe('PUT /api/activity/:id', function() {
	// 	it('should update the activity of given id', function(done) {
	// 		let id = 23;
	// 		chai.request(app)
	// 		.get('/api/activity/'+id)
	// 		.get({'x-access-token': token})
	// 		.send({

	// 		})
	// 		.end(function(error, response) {
	// 			response.should.have.status(200);
	// 			done();
	// 		});
	// 	});
	// });


	describe('DELETE /api/activity/:id', function() {
		it('should delete actvity of given id', function(done) {
			let id = 22;
			chai.request(app)
			.get('/api/activity/'+id)
			.set({'x-access-token': token})
			.end(function(error, response) {
				response.should.have.status(200);
				response.body.should.be.a('object');
				done();
			});
		});
	});


	// describe('GET /api/activity/test/', function() {
	// 	it('should get test activity', function(done) {
	// 		chai.request(app)
	// 		.get('/api/activity/test/')
	// 		.set({'x-access-token': token})
	// 		.end(function(error, response) {
	// 			response.should.have.status(200);
	// 			response.body.should.be.a('object');
	// 			done();
	// 		});
	// 	});
	// });

});