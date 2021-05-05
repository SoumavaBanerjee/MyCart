import React, { FC, useState, useEffect } from "react";
import * as api from "../../api/products";

import { Grid, Typography } from "@material-ui/core";
import Product from "../../Components/Product/Product";

// for testing
import { product } from "../../Types";

const HomeScreen: FC = () => {
  const [products, setProducts] = useState<product[] | undefined>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await api.getProducts();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Typography component="h2" variant="h3">
        Latest Products
      </Typography>
      <Grid container>
        {products &&
          products.map((productItem) => (
            <Grid key={productItem._id} item sm={12} md={4} lg={3}>
              <Product product={productItem} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default HomeScreen;
