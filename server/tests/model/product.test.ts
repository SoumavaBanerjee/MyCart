import { expect } from "chai";
import Product from "../../src/model/product.model";
import { IProduct } from "../../src/interface";

describe("Product", () => {
  it("should be invalid if name is empty", (done) => {
    const product: IProduct = new Product();
    product.validate((err) => {
      expect(err?.name).to.exist;
      done();
    });
  });
});
