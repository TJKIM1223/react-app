import { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import Table from "@material-ui/core/Table";
import { withStyles } from "@material-ui/core/styles";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PageviewIcon from "@material-ui/icons/Pageview";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { readTableData, referData } from "../../action/action";
import "./locinfo.css";

const baseURL1 = "http://10.1.1.153:5000/";
const useStyles = (theme) => ({
  top: {
    fontSize: 8,
    border: "1px solid lightgray",
    padding: "0",
  },
  textbox: {
    height: 15,
  },
  Menuitems: {
    dense: true,
    height: "20px",
    fontSize: "12px",
  },
  Selects: {
    height: "30px",
    fontSize: "14px",
    backgroundColor: "white",
    marginLeft: "10px",
    marginRight: "10px",
  },
  inputroot: {
    width: 100,
    height: 25,
    display: "flex",
    alignItems: "center",
    marginRight: "5px",
  },
  readonlyroot: {
    width: 300,
    height: 25,
    display: "flex",
    alignItems: "center",
    marginRight: "5px",
  },
  divider: {
    height: 25,
  },
  iconButton: {
    width: 15,
  },
  input: {
    width: 100,
    fontSize: "14px",
    "& input": {
      textAlign: "center",
    },
  },
  readonlytext: {
    width: 300,
    height: 25,
    fontSize: "14px",
    alignContent: "center",
    textAlign: "center",
    align: "center",
    "& input": {
      textAlign: "center",
    },
  },
  buttons: {
    width: 80,
    marginLeft: 10,
  },
  grouproot: {
    width: 100,
    height: 25,
    marginLeft: "10px",
    marginRight: "5px",
  },
  grouptext: {
    width: 100,
    height: 25,
    fontSize: "14px",
    alignContent: "center",
    textAlign: "center",
    align: "center",
    "& input": {
      textAlign: "center",
    },
  },
  closebuttons: {
    width: 80,
    marginRight: 10,
    marginLeft: 10,
  },
});

function createData(
  LOC_ID,
  NODE_ID,
  LOC_NM,
  LOC_TYPE,
  LC_TYPE,
  LAMP_TYPE,
  MCUFW_ID,
  SCUFW_ID,
  DELTA,
  TRANS_CYC,
  AUTO_CORR,
  AUTO_CNTMOD,
  COMM_TYPE,
  IPADDR,
  PORT_NUM,
  MAIN_LOC,
  GRP_ID,
  GRP_ORD,
  USE_YN
) {
  return {
    LOC_ID,
    NODE_ID,
    LOC_NM,
    LOC_TYPE,
    LC_TYPE,
    LAMP_TYPE,
    MCUFW_ID,
    SCUFW_ID,
    DELTA,
    TRANS_CYC,
    AUTO_CORR,
    AUTO_CNTMOD,
    COMM_TYPE,
    IPADDR,
    PORT_NUM,
    MAIN_LOC,
    GRP_ID,
    GRP_ORD,
    USE_YN,
  };
}

class loctable extends Component {
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
      console.log("Success! ");
      rst = response.data;
      this.props.loaddata(rst.data);
    });
    promise.catch((response) => {
      console.log("Error! ", response);
    });
  }
  onSearchClick = () => {
    console.log("검색하기");
  };
  onReferClick = () => {
    console.log("조회하기");
  };
  onAddClick = () => {
    console.log("추가하기");
  };
  onDeleteClick = () => {
    console.log("빼기");
  };
  onSaveClick = () => {
    console.log("저장하기");
  };
  onFileSaveClick = () => {
    console.log("파일로 저장하기");
  };

  render() {
    const { classes } = this.props;
    console.log(this.props.tabledata);
    let rows = [];
    for (let local of this.props.tabledata) {
      rows.push(
        createData(
          local.LOC_ID,
          local.NODE_ID,
          local.LOC_NM,
          local.LOC_TYPE,
          local.LC_TYPE,
          local.LAMP_TYPE,
          local.MCUFW_ID,
          local.SCUFW_ID,
          local.DELTA,
          local.TRANS_CYC,
          local.AUTO_CORR,
          local.AUTO_CNTMOD,
          local.COMM_TYPE,
          local.IPADDR,
          local.PORT_NUM,
          local.MAIN_LOC,
          local.GRP_ID,
          local.GRP_ORD,
          local.USE_YN
        )
      );
    }
    rows = rows.sort(function (a, b) {
      return a.LOC_ID - b.LOC_ID;
    });
    return (
      <div className="App">
        <div className="searchtab">
          <Paper component="form" className={classes.grouproot}>
            <InputBase
              readOnly
              placeholder="그룹"
              className={classes.grouptext}
            />
          </Paper>
          <Paper component="form" className={classes.inputroot}>
            <InputBase className={classes.input} />
            <Divider className={classes.divider} orientation="vertical" />
            <IconButton
              className={classes.iconButton}
              onClick={this.onSearchClick}
            >
              <PageviewIcon />
            </IconButton>
          </Paper>
          <Paper component="form" className={classes.readonlyroot}>
            <InputBase
              readOnly
              placeholder="해당하는 값 표시"
              className={classes.readonlytext}
            />
          </Paper>
          <input type="checkbox" id="allcheck" />
          <label fontSize="8px">모든 신호교차로</label>
        </div>
        <div className="tabletab">
          <TableContainer component={Paper}>
            <Table size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.top} width="10px" />
                  <TableCell align="center" className={classes.top}>
                    LC번호
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    노드ID
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    교차로명칭
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    교차로유형
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    제어기유형
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    등기구유형
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    MCU 펌웨어ID
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    SCU 펌웨어ID
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    델타허용값
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    전이주기수
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    자동오류보정방법
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    자동센터모드
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    통신방식
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    IP주소/디바이스명
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    포트번호
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    주요교차로
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    그룹번호
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    그룹순번
                  </TableCell>
                  <TableCell align="center" className={classes.top}>
                    사용여부
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    hover
                    key={row.LOC_ID}
                    name={row.LOC_ID}
                    // onClick={() => this.onRowClickevent(row)}
                    // selected={this.state.selected.includes(row.LOC_ID, 0)}
                    className={classes.tableRow}
                    // classes={{
                    //   hover: classes.hover,
                    //   selected: classes.selected,
                    // }}
                  >
                    <TableCell className={classes.top} />
                    <TableCell component="th" scope="row">
                      {row.LOC_ID}
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      {row.NODE_ID}
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      {row.LOC_NM}
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
                      {row.MCUFW_ID}
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      {row.SCUFW_ID}
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      {row.DELTA}
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      {row.TRANS_CYC}
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      {row.AUTO_CORR}
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      {row.AUTO_CNTMOD}
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      {row.COMM_TYPE}
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      {row.IPADDR}
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      {row.PORT_NUM}
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      {row.MAIN_LOC}
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      {row.GRP_ID}
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      {row.GRP_ORD}
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      {row.USE_YN}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        <div className="buttontab">
          <button className={classes.buttons} onClick={this.onReferClick}>
            조회
          </button>
          <button className={classes.buttons} onClick={this.onAddClick}>
            추가
          </button>
          <button className={classes.buttons} onClick={this.onDeleteClick}>
            삭제
          </button>
          <button
            disabled
            className={classes.buttons}
            onClick={this.onSaveClick}
          >
            저장
          </button>
          <button className={classes.buttons} onClick={this.onFileSaveClick}>
            파일저장
          </button>
          <button
            className={classes.closebuttons}
            style={{ marginLeft: "auto" }}
          >
            닫기
          </button>
        </div>
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    tabledata: state.data,
  };
};

let mapDispatchtoProps = (dispatch) => ({
  loaddata: (data) => dispatch(readTableData(data)),
});

loctable = connect(mapStateToProps, mapDispatchtoProps)(loctable);
export default withStyles(useStyles)(loctable);
