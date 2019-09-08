var app = require('../server.js');

var token = app.get('token');


var chai = require('chai');
var chaiHttp = require('chai-http');
var should = chai.should();
chai.use(chaiHttp);




describe('Test of Case Feed api', function(){
	// should return all records instead showing empty record
	describe('GET /api/case-feed/', function(){
		it('should get all case-feed', function(done){
			chai.request(app)
			.get('/api/case-feed/')
			.set({'x-access-token': token})
			.end(function(error, response) {
				response.should.have.status(200);
				response.body.should.be.a('object');
				// response.body.length.should.be.eql(0);
				// console.log(response.body);
				done();
			});
		});
	});

	describe('GET /api/case-feed/:id', function() {
		it('should get the case-feed of given id', function(done) {
			let id = 1090;
			chai.request(app)
			.get('/api/case-feed/' + id)
			.set({'x-access-token': token})
			.end(function(error, response){
				response.should.have.status(200);
				response.body.should.be.a('object');
				// console.log(response.body);
				done();
			});
		});
	});

	describe('PUT /api/case-feed/:id', function() {
		it('should update the case-feed of given id', function(done){
			let id=1090;
			chai.request(app)
			.put('/api/case-feed/'+id)
			.set({'x-access-token': token})
			.send({
				status: "update",
				diagnosis: "",
				ccl_tear: true,
				complete_tear: "",
				injury_side: "",
				bracing_goal: "",
				medical_notes: "",
				cranial_length: "",
				caudal_length: ""
			})
			.end(function(error, response){
				response.should.have.status(200);
				response.body.should.be.a('object');
				// console.log(response.text);
				done();
			});
		});
	});
// function addCase(req, res, next){
//     console.log('adding')
//     var cases = {credential_id:req.decoded.id, dog:req.body.dog, name:req.body.name, status:req.body.status, description:req.body.description, diagnosis:req.body.diagnosis, ccl_tear:req.body.ccl_tear, complete_tear:req.body.complete_tear, injury_side:req.body.injury_side, bracing_goal:req.body.bracing_goal, medical_notes:req.body.medical_notes, cranial_length:req.body.cranial_length, caudal_length:req.body.caudal_length, phone:req.body.phone, timestamp:Date.now(), picture:''};
//     var picture = req.files['picture'];
//     if(typeof(picture) !== 'undefined'){
//         cases.picture = req.files['picture']['originalFilename'];
//     }

//     db.insertObject(cases, query.case_insert, function(obj){
//         if(typeof(picture) !== 'undefined'){
//             utility.uploadImages(req, 'cases', obj.id);
//             var media_obj = {file_main_type: 'cases', type_id:obj.id, file_path:'/media/cases/'+obj.id+'/'+picture['originalFilename'], file_type:'image', date_created: Date.now()};
//             db.getInsertObject( media_obj, query.media_select, query.media_insert, function(data, created){
//                     console.log(data);
//                 }
//             );

//         }

//         console.log(obj)
//         var output = {};
//         output['status'] = 1
//         output['data'] = obj
//         output['message'] = 'Case Added !'
//         res.status(200).json(output)
//     });
// }
	describe('POST /api/case-feed/', function() {
		it('should post case-feed', function(done) {
			chai.request(app)
			.post('/api/case-feed/1063')
			.set({'x-access-token': token, 'Content-Type': 'multipart/form-data'})
			.field({
				['id']:1063,
				['dog']: 442,
				['name']: " Test dog feed",
				['status']: "new",
				['description']: "no description",
				['diagnosis']: "left ACL instability ",
				['ccl_tear']: true,
				['complete_tear']: "true",
				['injury_side']: "left",
				['bracing_goal']: "avoid surgery; get back to long walks with owner quickly",
				['medical_notes']: "sadad",
				['cranial_length']: "sadda",
				['caudal_length']: "asdasd",
				['phone']: "dsadad",
				['picture']: ""
			})
			.end(function(error, response) {
				response.should.have.status(200);
				response.body.should.be.a('object');
				// console.log(response.body);
				done();
			});
		});
	});

	// describe('POST /api/case-feed/:id', function() {
	// 	it('should post case-feed of given id', function(done) {
	// 		let id = 1090;
	// 		chai.request(app)
	// 		.post('/api/case-feed/'+id)
	// 		.set({'x-access-token': token})
	// 		.send({

	// 		})
	// 		.end(function(error, response) {
	// 			response.should.have.status(200);
	// 			response.body.should.be.a('object');
	// 			// console.log(response.body);
	// 			done();
	// 		});
	// 	});
	// });
	
});

