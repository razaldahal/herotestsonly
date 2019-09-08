var app = require('../server.js');

var token = app.get('token');


var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);




describe('Test of Contact api', function(){
	
	describe('POST /api/contact-site/', function(){
		it('should post a contact', function(done){
			let message="test message"
			chai.request(app)
			.post('/api/contact-site/')
			.set({'x-access-token': token})
			.send({
				_type: "email",
				name: "shishir subedi",
				email: "shishirsubedi41@gmail.com",
				message: message
			})
			.end(function(error, response) {
				response.should.have.status(200);
				response.body.should.have.status(1)
				response.body.should.be.a('object');
				response.body.message.should.be.equal('sent !')
				response.body.data.should.be.a('object')
				// console.log(response.body);
				done();
			});
		});
	});
});