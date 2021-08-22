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
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";

// router
import { Link } from "react-router-dom";

//styles
import useStyles from "./styles";

//icons
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
//redux

import useAction from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";

interface Props {}

const UserList: React.FC<Props> = () => {
  const classes = useStyles();

  const { fetchUserList } = useAction();

  const { data, loading, error } = useTypedSelector((state) => state.userList);

  useEffect(() => {
    fetchUserList();
  }, [fetchUserList]);

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("delete", e.currentTarget.value);
  };

  return (
    <>
      <>
        <div className={classes.userlist__heading}>
          <Avatar className={classes.avatar}>
            <AccountCircleRoundedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Users
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
                  <TableCell align="right">EMAIL</TableCell>
                  <TableCell align="right">ADMIN</TableCell>
                  <TableCell align="right" />
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row) => (
                  <TableRow className={classes.tableCell} key={row._id}>
                    <TableCell>{row._id}</TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">
                      <a href={`mailto:${row.email}`}>{row.email}</a>
                    </TableCell>
                    <TableCell align="right">
                      {row.isAdmin ? (
                        <Chip
                          style={{ backgroundColor: "#51c625", color: "black" }}
                          label="Admin"
                          deleteIcon={<CheckIcon />}
                        />
                      ) : (
                        <Chip
                          color="secondary"
                          label="Not Admin"
                          deleteIcon={<CloseIcon />}
                        />
                      )}
                    </TableCell>
                    <TableCell>
                      <Link to={`/user/${row._id}`}>
                        <IconButton color="primary" aria-label="edit">
                          <EditIcon />
                        </IconButton>
                      </Link>
                      <IconButton
                        onClick={handleDelete}
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

export default UserList;
