import React, { FC } from "react";

import { Grid, Paper, Typography, Box } from "@material-ui/core";
import Product from "../../Components/Product/Product";

// for testing
import products from "../../products";

const HomeScreen: FC = () => {
  return (
    <>
      <Typography component="h2" variant="h3">
        Latest Products
      </Typography>
      <Grid container>
        {products.map((productItem) => (
          <Grid key={productItem._id} item sm={12} md={4} lg={3}>
            <Product product={productItem} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default HomeScreen;
