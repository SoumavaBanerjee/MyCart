import React, { FC } from "react";

import { product } from "../../Types";

import {
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Rating } from "@material-ui/lab";

import { Link } from "react-router-dom";

import useStyles from "./styles";

interface productProp {
  product: product;
}

const Product: FC<productProp> = ({ product }) => {
  const classes = useStyles();

  return (
    <Link to={`/product/${product._id}`} style={{ textDecoration: "none" }}>
      <Card className={classes.cardWrapper}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            title={product.name}
            image={product.image}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="body1"
              color="primary"
              component="div"
              style={{ padding: "5px" }}
            >
              {product.name}
            </Typography>
            <Typography
              gutterBottom
              variant="subtitle2"
              color="textSecondary"
              component="div"
              style={{ display: "flex", alignItems: "flex-end" }}
            >
              <Rating readOnly value={product.rating} precision={0.5} />
              &nbsp;({product.numReviews})
            </Typography>
            <Typography variant="h6" color="textPrimary" component="p">
              ${product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default Product;
