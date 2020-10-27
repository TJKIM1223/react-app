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
import { readdata, deletedata } from "../../../../action";

const baseURL1 = "http://10.1.1.153:5000/";
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
    fontSize: 20,
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

class leftGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      isChecked: [],
      selectedName: [],
    };
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
      console.log("Success! ");
      rst = response.data;
      this.props.updatedata(rst.data);
    });
    promise.catch((response) => {
      console.log("Error! ", response);
    });
  }
  onRecoverClick = () => {
    let param = {};
    param.url = "/local";
    param.method = "get";
    param.data = {};
    this.httpRequest(param);
    console.log("Recovery complete!");
  };

  onCopyClick = () => {
    const arrlength = this.state.selected.length;
    let copyimsi = [];
    for (let i = 0; i < arrlength; i++) {
      copyimsi[i] = this.props.Leftdata.find(
        (data) => data.ID === this.state.selected[i]
      );
    }
    this.props.copying(copyimsi);
    this.setState({
      selected: [],
      selectedName: [],
    });
  };

  onDeleteClick = () => {
    this.props.deleteSelectData(this.state.selected);
    console.log("Delete complete!");
    this.setState({
      selected: [],
      selectedName: [],
    });
  };
  onRowClickevent = (data) => {
    const checkdata = this.state.selected.indexOf(data.LOC_ID, 0);
    if (checkdata === -1) {
      this.setState({
        selected: this.state.selected.concat(data.LOC_ID),
        selectedName: this.state.selectedName.concat(data.LOC_NM),
      });
    } else if (checkdata > -1) {
      this.setState({
        selected: this.state.selected.filter((item) => item !== data.LOC_ID),
        selectedName: this.state.selectedName.filter(
          (item) => item !== data.LOC_NM
        ),
      });
    }
  };
  render() {
    let rows = [];
    for (let local of this.props.Leftdata) {
      rows.push(
        createData(
          local.ID,
          local.NAME,
          local.GRPID,
          local.LOCTYPE,
          local.LCTYPE,
          local.LAMPTYPE,
          local.NODEID,
          local.NLAT,
          local.NLON
        )
      );
    }
    //sorting table
    rows = rows.sort(function (a, b) {
      return a.LOC_ID - b.LOC_ID;
    });
    const { classes } = this.props;
    const rowLength = this.props.Leftdata.length;
    return (
      <div>
        <div className={classes.selectedID}>
          선택된 교차로 명: {this.state.selectedName + " "}
        </div>
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
                  <TableRow
                    hover
                    key={row.LOC_ID}
                    name={row.LOC_ID}
                    onClick={() => this.onRowClickevent(row)}
                  >
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
              onClick={this.onDeleteClick}
              className={classes.button}
            >
              레코드 제거
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.onCopyClick}
              className={classes.button}
            >
              복사
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={this.onRecoverClick}
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

let mapStateToProps = (state) => {
  return {
    Leftdata: state.data,
  };
};

let mapDispatchtoProps = (dispatch) => ({
  updatedata: (data) => dispatch(readdata(data)),
  deleteSelectData: (data) => dispatch(deletedata(data)),
});

leftGrid = connect(mapStateToProps, mapDispatchtoProps)(leftGrid);

export default withStyles(useStyles)(leftGrid);
