process.env.NODE_ENV = "test";
import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);
const expect = chai.expect;

describe("product route", () => {
  // beforeEach((done) => {
  //   Product.deleteMany({}, (err) => done());
  // });

  describe("/GET products", () => {
    it("should GET all products", (done) => {
      chai
        .request("http://localhost:5000")
        .get("/api/products")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("array");
          done();
        });
    });
  });

  describe("/GET product/:id", () => {
    it("should get specific product", (done) => {
      chai
        .request("http://localhost:5000")
        .get("/api/products/60a29795fc73b5c5181ffef6")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.an("object");
          done();
        });
    });
  });
});
