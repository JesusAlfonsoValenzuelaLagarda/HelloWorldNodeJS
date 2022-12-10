var expect  = require('chai').expect;
var request = require('request');

it('Status of site', function(done) {
    request('http://localhost:4000' , function(error, res, body) {
        expect(res.statusCode).to.equal(200);
        done();
    });
});

it('Should write Hello world', function(done) {
    request('http://localhost:4000' , function(error, res, body) {
        expect(body).to.equal('Hello World');
        //expect(res.statusCode).to.equal(200);
        done();
    });
});