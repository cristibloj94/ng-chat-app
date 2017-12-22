var request = require("request");

describe("Hello World Server", function() {
    describe("GET /", function() {

        it("returns status code 200", function(done) {
            request.get("http://localhost:3001", function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        });

    });
});