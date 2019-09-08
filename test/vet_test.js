var app = require('../server.js');

var token = app.get('token');


var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);



// Done

describe('Test of Vet api', function(){
		
	describe('GET /api/vet/', function() {
		it('should get all vet', function(done){
			chai.request(app)
			.get('/api/vet/')
			.set({'x-access-token': token})
			.end(function(error, response){
				response.should.have.status(200);
				response.body.should.be.a('object');
				// console.log(response.body);
				done();
			});
		});
	});

	describe('GET /api/vet/:id', function(){
		it('should get a vet of given id', function(done){
			var id = 1409;
			chai.request(app)
			.get('/api/vet/' + id)
			.set({'x-access-token': token})
			.end(function(error, response) {
				response.should.have.status(200);
				response.body.should.be.a('object');
				// console.log(response.body);
				done();
			});
		});
	});

	describe('PUT /api/vet/:id', function(){
		it('should update a vet of given id', function(done){
			var id = 1409;
			chai.request(app)
			.put('/api/vet/' + id)
			.set({'x-access-token': token,'Content-Type':'multipart/form-data'})
			.field(fields={
	            ['name']: "Twin Fork ",
	            ['clinic_url']: "http://www.twinfloks.com",
	            ['email']: "kenzie_hansen@yahoo.com",
	            ['doctor_name']: "Dr. Downey",
	            ['address']: "419 Eagle St",
	            ['city']: "Benkelman",
	            ['state']: "NE",
	            ['zipcode']: "69021",
	            ['country']: "US",
				['phone']: "785-443-4665",
				['media']:''
        	})
			.end(function(error, response) {
				response.should.have.status(200);
				response.body.should.be.a('object');
				done();
			});
		});
	});

	describe('POST /api/vet/', function() {
		it('should post a vet', function(done) {
			chai.request(app)
			.post('/api/vet/1409')
			.set({'x-access-token': token,'Content-Type':'multipart/form-data'})
			.field(fields={
				            ['name']: "Twin Fork",
				            ['clinic_url']: "http://www.twinfloks.com",
				            ['email']: "kenzie_hansen@yahoo.com",
				            ['doctor_name']: "Dr. Downey",
				            ['address']: "419 Eagle St",
				            ['city']: "Benkelman",
				            ['state']: "NE",
				            ['zipcode']: "69021",
				            ['country']: "US",
							['phone']: "785-443-4665",
							['media']:''}
						
					)
			.end(function(error, response){
				response.should.have.status(200);
				done();
			});
		});
	});

	describe('GET /api/clinic/', function() {
		it('should get all clinic', function(done) {
			chai.request(app)
			.get('/api/clinic/')
			.set({'x-access-token': token})
			.end(function(error, response) {
				response.should.have.status(200);
				response.body.should.be.a('object');
				// console.log(response.body);
				done();
			});
		});
	});
});