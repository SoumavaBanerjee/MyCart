import React, { useState, useEffect } from "react";

// components import
import {
  Table,
  TableBody,
  TableCell,
  TableRow,
  TableContainer,
  TableHead,
  TablePagination,
  Typography,
  Avatar,
  LinearProgress,
  Paper,
  Button,
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

// icons
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import DoneIcon from "@material-ui/icons/Done";
import CloseIcon from "@material-ui/icons/Close";

// redux
import { useTypedSelector } from "../../hooks/useTypedSelector";
import useActions from "../../hooks/useAction";

//router
import { Link } from "react-router-dom";

// styles
import useStyles from "./styles";

function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
}

interface Props {}

const UserOrders: React.FC<Props> = () => {
  const classes = useStyles();

  const { fetchOrderList } = useActions();

  const { data, error, loading } = useTypedSelector(
    (state) => state.userOrderList
  );

  useEffect(() => {
    fetchOrderList();
  }, [fetchOrderList]);

  return (
    <>
      <Avatar className={classes.avatar}>
        <ShoppingCartIcon />
      </Avatar>

      <Typography component="h1" variant="h5">
        Orders
      </Typography>
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
                <TableCell align="right">DATE</TableCell>
                <TableCell align="right">TOTAL</TableCell>
                <TableCell align="right">PAID</TableCell>
                <TableCell align="right">DELIVERED</TableCell>
                <TableCell align="right" />
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow className={classes.tableCell} key={row._id}>
                  <TableCell>{row._id}</TableCell>
                  <TableCell align="right">
                    {row.createdAt?.substring(0, 10)}
                  </TableCell>
                  <TableCell align="right">
                    {row.totalPrice.toFixed(2)}
                  </TableCell>
                  <TableCell align="right">
                    {row.isPaid ? (
                      row.paidAt && row.paidAt?.substring(0, 10)
                    ) : (
                      <CloseIcon color={"error"} />
                    )}
                  </TableCell>
                  <TableCell align="right">
                    {row.isDelivered ? (
                      row.DeliveredAt && row.DeliveredAt?.substring(0, 10)
                    ) : (
                      <CloseIcon color={"error"} />
                    )}
                  </TableCell>
                  <TableCell>
                    <Link to={`/order/${row._id}`}>
                      <Button variant="text"> Details </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};

export default UserOrders;
