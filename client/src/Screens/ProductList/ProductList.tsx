import React, { useEffect } from "react";

// components
import {
  Avatar,
  LinearProgress,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  Paper,
  Chip,
  IconButton,
  Button,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

// router
import { Link } from "react-router-dom";

//styles
import useStyles from "./styles";

//icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
//redux
import useAction from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface Props {}

const ProductList: React.FC<Props> = () => {
  const classes = useStyles();

  const { fetchProducts } = useAction();

  const { data, loading, error } = useTypedSelector(
    (state) => state.productList
  );

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleDelete = (id: string) => {
    console.log("Delete");
  };

  return (
    <>
      <>
        <div className={classes.productlist__heading}>
          <Avatar className={classes.avatar}>
            <ShoppingCartIcon />
          </Avatar>
          <Button
            className={classes.productlist__heading__btn}
            variant="contained"
            color="primary"
            startIcon={<AddIcon />}
          >
            Add new Product
          </Button>
          <Typography
            style={{ marginTop: "0.5em" }}
            component="h1"
            variant="h5"
            className={classes.productlist__heading__text}
          >
            Products
          </Typography>
        </div>

        {loading ? (
          <LinearProgress
            style={{ marginTop: "4px", marginBottom: "4px" }}
            color="primary"
          />
        ) : error || !data ? (
          <Alert variant="outlined" severity="error">
            {error}
          </Alert>
        ) : (
          <TableContainer className={classes.tablePaper} component={Paper}>
            <Table>
              <TableHead>
                <TableRow className={classes.tableHead}>
                  <TableCell>ID</TableCell>
                  <TableCell align="right">NAME</TableCell>
                  <TableCell align="right">PRICE ($)</TableCell>
                  <TableCell align="right">CATEGORY</TableCell>
                  <TableCell align="right">BRAND</TableCell>
                  <TableCell align="right" />
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow className={classes.tableCell} key={row._id}>
                    <TableCell>{row._id}</TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.category}</TableCell>
                    <TableCell align="right">{row.brand}</TableCell>
                    <TableCell>
                      <Link to={`/product/${row._id}`}>
                        <IconButton color="primary" aria-label="edit">
                          <EditIcon />
                        </IconButton>
                      </Link>
                      <IconButton
                        onClick={() => {
                          handleDelete(row._id);
                        }}
                        color="secondary"
                        aria-label="delete"
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </>
    </>
  );
};

export default ProductList;
