global.DATABASE_URL = 'mongodb://localhost/node-capstone-shoppers-guide-test';

var chai = require('chai');
var chaiHttp = require('chai-http');

var server = require('../server.js');
var Item = require('../models/product');

var should = chai.should();
var app = server.app;

chai.use(chaiHttp);

describe('BestBuy', function() {
    before(function(done) {
        server.runServer(function() {
            Item.create({name: 'product'}, 
            function() {
                done();
            });
        });
    });
   
   describe('BestBuy', function() {
    it('should product on GET', function(done) {
        chai.request(app)
            .get('/product')
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

    it('should add an product POST', function(done) {
        chai.request(app)
            .post('/product')
            .send({'name': 'product'})
            .end(function(err, res) {
                should.equal(err, null);
                res.should.have.status(201);
                res.should.be.json;
                res.body.should.be.a('object');
                res.body.should.have.property('name');
                res.body.should.have.property('_id');
                res.body.name.should.be.a('string');
                res.body._id.should.be.a('string');
                res.body.name.should.equal('product');
                done();
            });
    });

    it('should a product on PUT', function(done) {
        chai.request(app)
            .put('/product/3')
            .send({'id': 3, 'name': 'product'})
            .end(function(err, res) {
                should.equal(err, null);
                res.should.have.status(201);
                res.should.be.json;
                done();
            });
    });

    it('should delete a product DELETE', function(done) {
        chai.request(app)
            .delete('/product/3')
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