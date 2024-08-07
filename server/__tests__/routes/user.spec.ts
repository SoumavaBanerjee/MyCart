process.env.NODE_ENV = "test";
import chai from "chai";
import chaiHttp from "chai-http";

chai.use(chaiHttp);
const expect = chai.expect;

describe("user  route", () => {
  // beforeEach((done) => {
  //   Product.deleteMany({}, (err) => done());
  // });

  describe("/POST login", () => {
    it("should GET all products", (done) => {
      chai
        .request("http://localhost:5000")
        .post("/api/users/login")
        .send({
          email: "frost.byte@xyz.com",
          password: "frost1234",
        })
        .end((err, res) => {
          expect(res.status).to.equal(200);
          expect(err).to.not.exist;
          expect(res.body).to.have.property("token");
          done();
        });
    });
  });
});
