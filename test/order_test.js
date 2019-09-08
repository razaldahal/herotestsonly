var app = require('../server.js');

var token = app.get('token');


var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);




describe('Test of Order api', function(){
		
// 	describe('GET /api/order', function() {
// 		it('should get list of order', function(done){
// 			chai.request(app)
// 			.get('/api/order?status=unshipped')
// 			.set({'x-access-token': token})
// 			.end(function(error, response){
// 				response.should.have.status(200);
// 				response.body.should.be.a('array');
// 				// console.log(response.body);
// 				done();
// 			});
// 		});
// 	});

	describe('GET /api/order/:id', function() {
		it('should get order of given id', function(done){
			let id = 21017;
			
			chai.request(app)
			.get('/api/order/'+id)
			.set({'x-access-token': token})
			.end(function(error, response){
				response.should.have.status(200);
				response.body.should.be.a('object');
				done();
			});
		});
	});

	// not working

	// describe('POST /api/order', function() {
	// 	it('should post a order', function(done) {
	// 		chai.request(app)
	// 		.post('/api/order')
	// 		.set({'x-access-token': token, 'Content-Type': 'multipart/form-data'})
	// 		.send({
	// 			email: "test@gmail.com",
	// 			name: "test name",
	// 			zipcode: 1234,
	// 			doctor_name: "test doctor",
	// 			address: "address test",
	// 			country: "Nepal",
	// 			phone: 1243552
	// 		})
	// 		.end(function(error, response){
	// 			response.should.have.status(200);
	// 			done();
	// 		})
	// 	});
	// });

	describe('GET /api/order/check/:shopify_order_id/:shopify_checkout_id', function() {
		it('should return details of order a/c to shopify order id and sopify checkout id', function(done) {
			let shopify_order_id = 261486936074;
			let shopify_checkout_id = 417443512330;
			chai.request(app)
			.get('/api/order/check/'+shopify_order_id+'/'+shopify_checkout_id)
			.set({'x-access-token': token})
			.end(function(error, response){
				response.should.have.status(200);
				// response.body.should.be.a('object');
				done();
			});
		});
	});


	describe('GET /api/order/customer/:id', function() {
		it('should return address details of customer order by id', function(done) {
			let id = 44;
			chai.request(app)
			.get('/api/order/customer/'+id)
			.set({'x-access-token': token})
			.end(function(error, response){
				response.should.have.status(200);
				// response.body.should.be.a('object');
				done();
			});
		});
	});

	// not working
	
	// describe('PUT /api/order/customer/:id', function() {
	// 	it('should update the customer order by given id', function(done){
	// 		let id = 44;
	// 		chai.request(app)
	// 		.put('/api/order/customer/'+id)
	// 		.set({'x-access-token': token})
	// 		.send({
	// 			first_name: "Deborahh",// previous Deborah
	// 			last_name: "Puckett",// previous puckett
	// 			email: "dpwow11@yahoo.com",
	// 			phone: 8163523528,
	// 		})
	// 		.end(function(error, response) {
	// 			response.should.have.status(200);
	// 			done();
	// 		});
	// 	});
 });

