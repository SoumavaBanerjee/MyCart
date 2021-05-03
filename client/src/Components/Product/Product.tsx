import React, { FC } from "react";

import { product } from "../../Types";

import { Card, CardMedia, CardActionArea } from "@material-ui/core";

import useStyles from "./styles";

interface productProp {
  product: product;
}

const Product: FC<productProp> = ({ product }) => {
  const classes = useStyles();

  return (
    <Card className={classes.cardWrapper}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          title={product.name}
          image={product.image}
        />
      </CardActionArea>
    </Card>
  );
};

export default Product;
