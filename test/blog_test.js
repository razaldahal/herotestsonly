var app = require('../server.js');

var token = app.get('token');


var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);



describe('Test of Blog api', function(){	
	describe('GET /api/blog/detail/', function(){
		it('should return all blog', function(done){
			chai.request(app)
			.get('/api/blog/detail/')
			.set({'x-access-token': token})
			.end(function(error, response) {
				response.should.have.status(200);
				response.body.should.be.a('object');
				// console.log(response.body);
				done();
			});
		});
	});

	describe('GET /api/blog/post/recent', function() {
		it('should get the recent blog post', function(done) {
			chai.request(app)
			.get('/api/blog/post/recent')
			.set({'x-access-token': token})
			.end(function(error, response) {
				response.should.have.status(200);
				// response.body.should.be.a('object');
				// console.log(response.body);
				done();
			});
		});
	});

	describe('Get /api/blog/post/:id(\\d+)/', function() {
		it('should get the post by id', function(done) {
			let id = 1418;
			chai.request(app)
			.get('/api/blog/post/' + id)
			.set({'x-access-token': token})
			.end(function(error, response) {
				response.should.have.status(200);
				response.body.should.be.a('object');
				// console.log(response.body);
				done();
			});
		});
	});

	describe('GET /api/blog/post/:name', function() {
		it('should get the blog by name', function(done) {
			let name = 'hero';
			chai.request(app)
			.get('/api/blog/post/' + name)
			.set({'x-access-token': token})
			.end(function(error, response){
				response.should.have.status(200);
				response.body.should.be.a('object');
				// console.log(response.body);
				done();
			});
		});
	});

	describe('GET /api/blog/post/:name/:date', function() {
		it('should get the blog by name and date', function(done) {
			let name = 'braces';
			let date = '2015-05-29'
			chai.request(app)
			.get('/api/blog/post/'+name+'/'+date)
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
