global.DATABASE_URL = 'mongodb://localhost/node-capstone-shoppers-guide-test';

var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../server.js');
var Item = require('../models/recipe');

var should = chai.should();
var app = server.app;

chai.use(chaiHttp);
//for describe yummly function
describe('Yummly', function() {
    before(function(done) {
        server.runServer(function() {
            Item.create({name: 'recipe'}, 
            function() {
                done();
            });
        });
    });
   //for get recipe
   describe('Yummly', function() {
    it('should recipe on GET', function(done) {
        chai.request(app)
            .get('/recipe')
            .end(function(err, res) {
                should.equal(err, null);
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body.should.have.length(3);
                res.body[0].should.be.a('object');
                res.body[0].should.have.property('_id');
                res.body[0].should.have.property('name');
                res.body[0]._id.should.be.a('string');
                res.body[0].name.should.be.a('string');
                res.body[0].name.should.equal('Broad beans');
                res.body[1].name.should.equal('Tomatoes');
                res.body[2].name.should.equal('Peppers');
                done();
            });
    });
//for post function
    it('should add an recipe POST', function(done) {
        chai.request(app)
            .post('/recipe')
            .send({'name': 'recipe'})
            .end(function(err, res) {
                should.equal(err, null);
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('_id');
                res.body.name.should.be.a('string');
                res.body._id.should.be.a('string');
                res.body.name.should.equal('recipe');
                done();
            });
    });
//for put function
    it('should a recipe on PUT', function(done) {
        chai.request(app)
            .put('/recipe/3')
            .send({'id': 3, 'name': 'recipe'})
            .end(function(err, res) {
                should.equal(err, null);
                res.should.have.status(201);
                res.should.be.json;
                done();
            });
    });
//for delete function
    it('should delete a recipe DELETE', function(done) {
        chai.request(app)
            .delete('/recipe/3')
            .end(function(err, res){
                //should.equal(err, null);
                res.should.have.status(404);
                done();
            });
    });

}); 

    after(function(done) {
        Item.remove(function() {
            done();
        });
    });
});