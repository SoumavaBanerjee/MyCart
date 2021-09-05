import React, { FC, useEffect } from "react";
import { Grid, Typography, LinearProgress } from "@material-ui/core";
import { Alert } from "@material-ui/lab";

// custom components

import Product from "../../Components/Product/Product";

//carousel
import Slider from "react-slick";
import { mainCarouselSettings, responsiveSettings } from "./sliderSettings";
// redux
import useAction from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

// image array
import carouselImages from "./imageProvider";

// styles
import useStyles from "./styles";

const HomeScreen: FC = () => {
  const classes = useStyles();

  const { fetchProducts } = useAction();
  const { data, error, loading } = useTypedSelector(
    (state) => state.productList
  );

  console.log(error);

  // memoize it later using useMemo
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      {loading && (
        <LinearProgress
          style={{ marginTop: "4px", marginBottom: "4px" }}
          color="primary"
        />
      )}

      {error && (
        <Alert variant="outlined" severity="error">
          {error}
        </Alert>
      )}
      <div className={classes.carousel__container}>
        <Slider {...mainCarouselSettings}>
          {carouselImages.map((img) => {
            return (
              <div key={img} className={classes.carousel}>
                <img className={classes.carousel__img} src={img} alt="sale" />
              </div>
            );
          })}
        </Slider>
      </div>
      <Typography component="h3" variant="h3" style={{ marginBottom: "16px" }}>
        Latest Products
      </Typography>
      <div className={classes.carousel__container__responsive}>
        <Slider {...responsiveSettings}>
          {data.slice(0, data.length - 2).map((productItem) => {
            return (
              <div key={productItem._id} className={classes.carousel}>
                <Product product={productItem} />
              </div>
            );
          })}
        </Slider>
      </div>
      <Typography component="h3" variant="h3" style={{ marginBottom: "16px" }}>
        Electronics
      </Typography>
      <div className={classes.carousel__container__responsive}>
        <Slider {...responsiveSettings}>
          {data
            .filter((item) => item.category === "Electronics")
            .map((productItem) => {
              return (
                <div key={productItem._id} className={classes.carousel}>
                  <Product product={productItem} />
                </div>
              );
            })}
        </Slider>
      </div>
    </>
  );
};

export default HomeScreen;

// <Grid container>
//   {data.map((productItem) => (
//     <Grid key={productItem._id} item sm={12} md={4} lg={3}>
//       <Product product={productItem} />
//     </Grid>
//   ))}
// </Grid>
