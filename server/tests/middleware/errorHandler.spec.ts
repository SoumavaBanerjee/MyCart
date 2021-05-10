process.env.NODE_ENV = "test";
import { doesNotMatch } from "assert/strict";
import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../src/index";

chai.use(chaiHttp);
const expect = chai.expect;

describe("custom error handler", () => {
  it("should throw error on server errors", (done) => {
    chai
      .request(server)
      .get("http://localhost:5000/api/products/23")
      .end((err, res) => {
        expect(err).to.exist;
        expect(err).to.have.property("message");
        expect(err).property("message").length.greaterThan(0);
        done();
      });
  });

  it("should respond with text upon hitting arbitary url", (done) => {
    chai
      .request(server)
      .get("http://localhost:5000/api/abcd")
      .end((err, res) => {
        expect(err).to.exist;
        expect(err).to.be.string;
        done();
      });
  });
});
