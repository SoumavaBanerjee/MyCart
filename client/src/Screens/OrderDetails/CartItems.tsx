import React from "react";

import {
  Paper,
  Typography,
  Chip,
  List,
  ListItem,
  Divider,
} from "@material-ui/core";

import useStyles from "./styles";
import { cartStateProduct } from "../../Types";
import { Alert } from "@material-ui/lab";
import { Link } from "react-router-dom";

interface Props {
  products: cartStateProduct[];
}

const CartItems: React.FC<Props> = ({ products }) => {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.orderComponents} elevation={3}>
        <Typography className={classes.orderText} component="h3" variant="h4">
          Order Items
        </Typography>
        {products.length === 0 ? (
          <>
            <Alert variant="outlined" severity="info">
              <Typography component="p">
                No items in cart
                {/* <Link className={classes.linkWrapper} to="/">
                      Go Back
                    </Link> */}
              </Typography>
            </Alert>
          </>
        ) : (
          <>
            <List>
              {products.map((item) => (
                <ListItem className={classes.listItem} key={item.product}>
                  <div className={`${classes.cartItem} ${classes.ListWrapper}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        height: "100%",
                        width: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <Divider absolute />
                  <div className={`${classes.cartItem} ${classes.ListWrapper}`}>
                    <Typography variant="body1" component="div">
                      <Link
                        className={classes.cartLinkWrapper}
                        to={`/product/${item.product}`}
                      >
                        {item.name}
                      </Link>
                    </Typography>
                  </div>

                  <div className={`${classes.cartItem} ${classes.ListWrapper}`}>
                    <Typography variant="body1" component="div">
                      {" "}
                      {item.quantity} X ${item.price} = $
                      {item.price * item.quantity}{" "}
                    </Typography>
                  </div>
                </ListItem>
              ))}
            </List>
          </>
        )}
      </Paper>
    </>
  );
};

export default CartItems;
