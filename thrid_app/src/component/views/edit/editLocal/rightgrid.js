import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
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
      copystates: [],
    };
  }
  render() {
    const { classes } = this.props;
    let rows = [];
    for (let local of this.props.copystate) {
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

    rows = rows.sort(function (a, b) {
      return a.LOC_ID - b.LOC_ID;
    });
    return (
      <div>
        <div className={classes.selectedID}>복사된 교차로 명</div>
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
                  <TableRow key={row.LOC_ID} hover>
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
              onClick={this.props.deletestate}
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

export default withStyles(useStyles)(centerGrid);
