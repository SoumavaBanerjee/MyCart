process.env.NODE_ENV = "test";
import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);
const expect = chai.expect;

describe("custom error handler", () => {
  it("should throw error on server errors", (done) => {
    chai
      .request("http://localhost:5000")
      .get("/api/products/23")
      .end((err, res) => {
        expect(res.status).to.be.greaterThan(400).and.be.lessThan(600);
        expect(err).to.not.exist;
        expect(res.error).to.exist;
        expect(res.error.text.length).to.be.greaterThan(0);
        done();
      });
  });

  it("should respond with text upon hitting arbitary url", (done) => {
    chai
      .request("http://localhost:5000")
      .get("/api/abcd")
      .end((err, res) => {
        expect(res).status(404);
        expect(res).to.have.property("error");
        expect(res.error).to.have.property("text");
        expect(res.error.text.length).to.be.greaterThan(0);
        done();
      });
  });
});
