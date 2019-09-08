var app = require('../server.js');

var token = app.get('token');


var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);




// describe('Test of payment api', function(){
		
// 	describe('POST /api/payment/execute', function() {
// 		it('should post a payment', function(done){
// 			chai.request(app)
// 			.post('/api/payment/execute')
// 			.set({'x-access-token': token})
//             .send({orderId:21017,
//                 paymentId:'',
//                 payerId:51
// 			})
// 			.end(function(error, response){
// 				response.should.have.status(200);
// 				response.body.should.be.a('object');
// 				done();
// 			});
// 		});
// 	});
// });