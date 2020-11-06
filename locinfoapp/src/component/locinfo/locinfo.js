import { Component } from "react";
import Table from "@material-ui/core/Table";
import Dialog from "@material-ui/core/Dialog";
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
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import Button from "@material-ui/core/Button";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import "./locinfo.css";

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
  buttons: {
    width: 80,
    marginLeft: 10,
  },
  grouproot: {
    width: 200,
    height: 25,
    marginLeft: "10px",
    marginRight: "5px",
  },
  grouptext: {
    width: 200,
    height: 25,
    fontSize: "14px",
    alignContent: "center",
    textAlign: "center",
    align: "center",
    "& input": {
      textAlign: "center",
    },
  },
  groupinputroot: {
    width: 270,
    height: 25,
    display: "flex",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: "5px",
  },
  groupinput: {
    width: 160,
    fontSize: "14px",
    "& input": {
      textAlign: "center",
    },
  },
  closebuttons: {
    width: 80,
    marginRight: 10,
    marginLeft: 10,
  },
  groupreadonly: {
    width: 90,
    "& input": {
      textAlign: "center",
    },
  },
  tableRow: {
    "&$selected, &$selected:hover": {
      backgroundColor: "gray",
    },
  },
  selected: {},
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
function createGroupData(GRP_ID, GRP_NM) {
  return {
    GRP_ID,
    GRP_NM,
  };
}
class LOCtable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      groupinput: "",
      groupSelected: "",
      groupname: "",
      LCSelected: [],
      selectedName: [],
      addstate: false,
      editstate: false,
    };
  }
  onDialogCloseClick = () => {
    console.log("DIALOG 닫기");
    this.setState({
      addstate: false,
      editstate: false,
    });
  };
  onSearchClick = () => {
    console.log("검색하기");
  };
  onReferClick = () => {
    console.log("조회하기");
  };
  onAddClick = () => {
    console.log("추가하기");
    this.setState({
      addstate: true,
    });
  };
  onEditClick = () => {
    console.log("편집하기");
    this.setState({
      editstate: true,
    });
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
  onCloseClick = () => {
    console.log("닫기");
  };
  onAddsaveClick = () => {
    console.log("추가항목/편집항목 저장");
    alert("저장했습니다.");
    this.setState({
      addstate: false,
      editstate: false,
    });
  };
  onGrouprowClick = (data) => {
    if (this.state.groupSelected === data.GRP_ID) {
      this.setState({
        groupSelected: "",
        groupname: "",
      });
    } else if (this.state.groupSelected !== data.GRP_ID) {
      this.setState({
        groupSelected: data.GRP_ID,
        groupname: data.GRP_NM,
      });
    }
  };
  onGroupSearchClick = () => {
    console.log(this.state.groupinput, "검색하기");
    let inputnumber = parseInt(this.state.groupinput);
    console.log(inputnumber);
    if (!inputnumber) {
      console.log("값이 없음!");
    } else {
      console.log("검색 가능!");
    }
  };
  onGroupinputChange = (e) => {
    this.setState({
      groupinput: e.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    console.log(this.state.groupSelected);
    let rows = [];
    for (let local of this.props.LOCdata) {
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
    let grouprows = [];
    for (let local of this.props.GRPdata) {
      grouprows.push(createGroupData(local.GRP_ID, local.GRP_NM));
    }
    grouprows = grouprows.sort(function (a, b) {
      return a.GRP_ID - b.GRP_ID;
    });
    return (
      <div className="App">
        <div className="Groupselect">
          <div className="groupSearchtab">
            <Paper component="form" className={classes.groupinputroot}>
              <InputBase
                className={classes.groupreadonly}
                readOnly
                value="그룹번호"
              />
              <Divider className={classes.divider} orientation="vertical" />
              <InputBase
                className={classes.groupinput}
                onChange={this.onGroupinputChange}
                type="number"
              />
              <Divider className={classes.divider} orientation="vertical" />
              <IconButton
                className={classes.iconButton}
                onClick={this.onGroupSearchClick}
              >
                <PageviewIcon />
              </IconButton>
            </Paper>
          </div>
          <div className="grouplist">
            <TableContainer component={Paper}>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" className={classes.top}>
                      그룹번호
                    </TableCell>
                    <TableCell align="center" className={classes.top}>
                      그룹명칭
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {grouprows.map((row) => (
                    <TableRow
                      hover
                      key={row.GRP_ID}
                      name={row.GRP_ID}
                      onClick={() => this.onGrouprowClick(row)}
                      selected={
                        this.state.groupSelected === row.GRP_ID ? true : false
                      }
                      className={classes.tableRow}
                      classes={{
                        hover: classes.hover,
                        selected: classes.selected,
                      }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        style={{ fontSize: "15px" }}
                      >
                        {row.GRP_ID}
                      </TableCell>
                      <TableCell
                        align="center"
                        className={classes.top}
                        style={{ fontSize: "15px" }}
                      >
                        {row.GRP_NM}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        <div className="Mainarea">
          <div className="searchtab">
            <Paper component="form" className={classes.grouproot}>
              <InputBase
                readOnly
                placeholder="그룹"
                value={this.state.groupname}
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
            <input type="checkbox" id="allcheck" />
            <label fontSize="8px" style={{ color: "white" }}>
              모든 신호교차로
            </label>
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
              초기화
            </button>
            <button className={classes.buttons} onClick={this.onAddClick}>
              추가
            </button>
            <button className={classes.buttons} onClick={this.onEditClick}>
              편집
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
              onClick={this.onCloseClick}
            >
              닫기
            </button>
          </div>
        </div>
        <Dialog open={this.state.addstate} fullWidth={true} maxWidth="sm">
          <MuiDialogTitle disableTypography>
            <div className="popupheadbar">
              <Typography variant="h6" style={{ alignSelf: "center" }}>
                제어기 추가
              </Typography>
              <IconButton
                // className={classes.closeButton}
                onClick={this.onDialogCloseClick}
                style={{ marginLeft: "auto", alignSelf: "center" }}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </MuiDialogTitle>
          <MuiDialogContent dividers className="popupcontent">
            <div className="popupgrid">
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                ID <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                명칭 <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                교차로유형 <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                제어기유형 <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                등기구유형 <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                델타 <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                전이주기수 <input className="popupgridinput" />
              </div>
            </div>
            <div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                자동오류보정 <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                자동센터모드 <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                통신방식 <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                IP <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                포트번호 <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                주요교차로 <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                그룹번호 <input className="popupgridinput" />
              </div>
            </div>
          </MuiDialogContent>
          <MuiDialogActions>
            <Button onClick={this.onAddsaveClick}>저장</Button>
          </MuiDialogActions>
        </Dialog>
        <Dialog open={this.state.editstate} fullWidth={true} maxWidth="sm">
          <MuiDialogTitle disableTypography>
            <div className="popupheadbar">
              <Typography variant="h6" style={{ alignSelf: "center" }}>
                제어기 편집
              </Typography>
              <IconButton
                // className={classes.closeButton}
                onClick={this.onDialogCloseClick}
                style={{ marginLeft: "auto", alignSelf: "center" }}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </MuiDialogTitle>
          <MuiDialogContent dividers className="popupcontent">
            <div className="popupgrid">
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                ID <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                명칭 <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                교차로유형 <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                제어기유형 <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                등기구유형 <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                델타 <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                전이주기수 <input className="popupgridinput" />
              </div>
            </div>
            <div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                자동오류보정 <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                자동센터모드 <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                통신방식 <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                IP <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                포트번호 <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                주요교차로 <input className="popupgridinput" />
              </div>
              <div
                style={{ display: "flex", fontSize: "18px", marginTop: "5px" }}
              >
                그룹번호 <input className="popupgridinput" />
              </div>
            </div>
          </MuiDialogContent>
          <MuiDialogActions>
            <Button onClick={this.onAddsaveClick}>저장</Button>
          </MuiDialogActions>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(useStyles)(LOCtable);
