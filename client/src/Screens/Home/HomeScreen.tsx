import React, { FC, useEffect } from "react";
import { Grid, Typography, LinearProgress } from "@material-ui/core";
import Product from "../../Components/Product/Product";

import useAction from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

const HomeScreen: FC = () => {
  const { fetchProducts } = useAction();
  const { data, error, loading } = useTypedSelector(
    (state) => state.productList
  );

  // memoize it later using useMemo
  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Typography component="h2" variant="h3">
        Latest Products
      </Typography>
      {loading ? (
        <LinearProgress
          style={{ marginTop: "4px", marginBottom: "4px" }}
          color="primary"
        />
      ) : error ? (
        <Typography variant="h2" component="h2">
          Error Occured
        </Typography>
      ) : (
        <Grid container>
          {data.map((productItem) => (
            <Grid key={productItem._id} item sm={12} md={4} lg={3}>
              <Product product={productItem} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default HomeScreen;
