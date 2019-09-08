var token = app.get('token');
var fs = require('fs')

var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);



// describe('POST /api/admin/order/:id/resend-email',function() {
//     it('should resend email of given order id', function(done) {
//         let id=112
//         chai.request(app)
//         .post('/api/admin/order/'+id+'/resend-email')
//         .set({'x-access-token': token})
//         .end(function(error, response) {
//             response.should.have.status(200);
//             response.body.status.should.be.equal(1);
//             response.body.should.be.a('object');
//             // console.log(response.body);
//             done();
//         });
//     });
// });


// describe('POST /api/admin/order/:id/update-insightly',function(){
//     it('should update insightly for given order id',function(done){
//         let id=112
//         chai.request(app)
//         .post('/api/admin/order/'+id+'/update-insightly')
//         .set({'x-access-token':token})
//         .end(function(error,response){
//             response.should.have.status(200);
//             response.body.status.should.be.equal(1);
//             response.body.should.be.a('object');
//             done();
//         });
//     });
// });