import React, { Component } from "react";
import axios from "axios";
import Table from "@material-ui/core/Table";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import { readdata, deletedata, resetdata, copydata } from "../../../../action";

const baseURL1 = "http://10.1.1.152:5000/";

const useStyles = (theme) => ({
  top: {
    fontSize: 10,
  },
  container: {
    margin: 10,
    width: 750,
    height: 500,
    whiteSpace: "nowrap",
  },
  selectedID: {
    fontSize: 22,
    margin: 10,
  },
  button: {
    marginRight: 10,
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row-reverse",
  },
});

function createData(
  LOC_ID,
  LOC_NM,
  GRP_ID,
  LOC_TYPE,
  LC_TYPE,
  LAMP_TYPE,
  NODE_ID,
  NODELAT,
  NODELON
) {
  return {
    LOC_ID,
    LOC_NM,
    GRP_ID,
    LOC_TYPE,
    LC_TYPE,
    LAMP_TYPE,
    NODE_ID,
    NODELAT,
    NODELON,
  };
}

const rows = [
  createData(
    7,
    "TEST7",
    2,
    0,
    0,
    0,
    "2260002500",
    "37.355020000161296 ",
    "126.96917200053191 "
  ),
];

class leftGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    let param = {};
    param.url = "/local";
    param.method = "get";
    param.data = {};
    this.httpRequest(param);
  }

  httpRequest(param) {
    let rst = {};
    axios.defaults.baseURL = baseURL1;
    let promise = axios({
      method: param.method,
      url: param.url,
      data: param.data,
    });
    promise.then((response) => {
      console.log("Success! ", param.data, response);
      rst = response.data;
      this.setState({
        data: rst.data,
      });
      console.log("state: ", this.state.data);
    });
    promise.catch((response) => {
      console.log("Error! ", response);
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className={classes.selectedID}>선택된 교차로 명</div>
        <div className={classes.container}>
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell align="center" className={classes.top}>
                    Name
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    그룹 ID
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    LOCTYPE
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    LCTYPE
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    램프타입
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    NodeID
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    위도
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    경도
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.LOC_ID}>
                    <TableCell component="th" scope="row">
                      {row.LOC_ID}
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      {row.LOC_NM}
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      {row.GRP_ID}
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      {row.LOC_TYPE}
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      {row.LC_TYPE}
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      {row.LAMP_TYPE}
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      {row.NODE_ID}
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      {row.NODELAT}
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      {row.NODELON}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <div className={classes.buttonContainer}>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              레코드 제거
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              복사
            </Button>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
            >
              복구
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

let mapDispatchtoProps = (dispatch) => ({
  updatedata: () => dispatch(readdata()),
});

leftGrid = connect(undefined, mapDispatchtoProps)(leftGrid);

export default withStyles(useStyles)(leftGrid);
