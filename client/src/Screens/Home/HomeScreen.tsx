import React, { FC } from "react";

import { Grid, Paper, Typography, Box } from "@material-ui/core";
import Product from "../../Components/Product/Product";

// for testing
import products from "../../products";

const HomeScreen: FC = () => {
  return (
    <>
      <Grid container>
        {products.map((productItem) => (
          <Grid key={productItem._id} item sm={12} md={6} lg={4}>
            <Product product={productItem} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomeScreen;
