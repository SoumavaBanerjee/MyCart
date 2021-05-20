import { expect } from "chai";
import User from "../../src/model/user.model";
import { IUserDoc } from "../../src/interface";

describe("user model", () => {
  it("should be invalid if name is empty", (done) => {
    const user: IUserDoc = new User();
    user.validate((err) => {
      expect(err?.name).to.exist;
      done();
    });
  });

  it("should have validation error if email is not in correct format", (done) => {
    const user: IUserDoc = new User({
      name: "Soumava Banerjee",
      email: "abc.com",
      password: "123",
    });
    user.validate((err) => {
      expect(err?.name).to.exist;
      done();
    });
  });
});
