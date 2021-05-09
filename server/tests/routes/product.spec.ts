process.env.NODE_ENV = "test";
import chai from "chai";
import chaiHttp from "chai-http";
import server from "../../src/index";
import Product from "../../src/model/product.model";

chai.use(chaiHttp);
const expect = chai.expect;

describe("product route", () => {
  beforeEach((done) => {
    Product.deleteMany({}, (err) => done());
  });

  describe("/GET products", () => {
    it("should GET all products", (done) => {
      chai
        .request(server)
        .get("/api/products")
        .end((err, res) => {
          expect(err).to.be.null;
          expect(res).to.have.status(200);
          expect(res.body).to.be.a("array");
          expect(res.body.length).to.be.eql(0);
          done();
        });
    });
  });
});
