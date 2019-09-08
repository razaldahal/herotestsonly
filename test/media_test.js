var app = require('../server.js');

var token = app.get('token');
var fs = require('fs')

var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);

describe('Test of media delete and sample upload api',function(){
    describe('DELETE /api/media/:id', function() {
        it('should delete media of given id', function(done){
            let id = 1;
            let path = '/media/'
            
            chai.request(app)
            
            .delete('/api/media/'+id+"?path="+path)
            .set({'x-access-token': token})
            .end(function(error, response){
                response.should.have.status(200);
                response.body.should.have.status('1');
                response.body.message.should.be.equal("Deleted");
                done();
            });
        });
    });

    describe ('POST /api/smaple-uplaod',function(){
        it('should post a sample picture file',function(done){
            let pic = "/home/rajl/Downloads/hero-back-dev/README.md"
            chai.request(app)
            .post('/api/sample-upload/')
            .set({'x-access-token':token,'Content-Type':'multipart/form-data'})
            .attach('picture',pic)
            .field(fields={['picture']:''})
            .end(function(err,res){
                res.should.be.a('object')
                done();
            });
        });
    });

});