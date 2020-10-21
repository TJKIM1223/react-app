import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { resetdata } from "../../../../action/index";
const useStyles = () => ({
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

class centerGrid extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
    console.log("check: ", this.state.data);
  }
  onResetClick = () => {
    this.props.resetRightdata();
    alert("복사된 항목 삭제!");
  };
  render() {
    const { classes } = this.props;
    let rows = [];
    if (this.props.checkdata === "0") {
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
    } else if (this.props.checkdata === "1") {
      console.log("right type : ", typeof this.props.Rightdata);
      for (let local of this.props.Rightdata) {
        rows[local.ID] = createData(
          local.ID,
          local.NAME,
          local.GRPID,
          local.LOCTYPE,
          local.LCTYPE,
          local.LAMPTYPE,
          local.NODEID,
          local.NLAT,
          local.NLON
        );
      }
    }

    return (
      <div>
        <div className={classes.selectedID}>선택된 교차로 명</div>
        <div className={classes.container}>
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.top}>ID</TableCell>
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
              onClick={this.onResetClick}
              className={classes.button}
            >
              초기화
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  console.log("state.right: ", state.LocaleditRight);
  return {
    Rightdata: state.LocaleditRight.data,
    checkdata: state.LocaleditRight.check,
  };
};

let mapDispatchtoProps = (dispatch) => ({
  resetRightdata: () => dispatch(resetdata()),
});

centerGrid = connect(mapStateToProps, mapDispatchtoProps)(centerGrid);

export default withStyles(useStyles)(centerGrid);
