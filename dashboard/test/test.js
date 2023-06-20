const { expect } = require("chai");
const request = require("supertest");
const app = require("../app");

var assert = require("assert");
describe("Array", function () {
    describe("#indexOf()", function () {
        it("should handle form submission", (done) => {
            const formData = {
                name: "John Doe",
                age: 25,
            };

            request(app)
                .post("/report/create") // Adjust the endpoint based on your app's route
                .send(formData)
                .expect(200)
                .end((err, res) => {
                    if (err) return done(err);

                    // Assert the response as needed
                    expect(JSON.parse(res.text)).to.deep.equal({
                        name: "John Doe",
                        age: 25,
                    });

                    done();
                });
        });
    });
});
