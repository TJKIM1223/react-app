import { Component } from "react";
import axios from "axios";
import LOCtable from "./locinfo";

const baseURL1 = "http://10.1.1.153:5000/";
class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LOCdata: [],
      GRPdata: [],
    };
  }
  LOCread = (input) => {
    let arrdata = [];
    let arrLocal = Object.values(input);
    for (let local of arrLocal) {
      arrdata.push({
        LOC_ID: local.id,
        NODE_ID: local.node_id,
        LOC_NM: local.name,
        LOC_TYPE: local.locType,
        LC_TYPE: local.lcType,
        LAMP_TYPE: local.lamp,
        MCUFW_ID: local.MCUFW_ID,
        SCUFW_ID: local.SCUFW_ID,
        DELTA: local.delta,
        TRANS_CYC: local.trsCyc,
        AUTO_CORR: local.aCorrect,
        AUTO_CNTMOD: local.AUTO_CNTMOD,
        COMM_TYPE: local.comType,
        IPADDR: local.ip,
        PORT_NUM: local.PORT_NUM,
        MAIN_LOC: local.MAIN_LOC,
        GRP_ID: local.grpId,
        GRP_ORD: local.GRP_ORD,
        USE_YN: local.aOnYn,
      });
    }
    arrdata = arrdata.sort(function (a, b) {
      return a.LOC_ID - b.LOC_ID;
    });
    this.setState({
      LOCdata: arrdata,
    });
  };
  GRPread = (input) => {
    let grpdata = [];
    for (let local of input) {
      grpdata.push({
        GRP_ID: local.id,
        GRP_NM: local.name,
      });
    }
    grpdata = grpdata.sort(function (a, b) {
      return a.GRP_ID - b.GRP_ID;
    });
    this.setState({
      GRPdata: grpdata,
    });
  };
  componentDidMount() {
    let param = {};
    param.url = "/local";
    param.method = "get";
    param.data = {};
    this.httpRequest(param);
    let groupparam = {};
    groupparam.url = "/group";
    groupparam.method = "get";
    groupparam.data = {};
    this.groupRequest(groupparam);
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
      this.LOCread(rst.data);
    });
    promise.catch((response) => {
      console.log("Error! ", response);
    });
  }
  groupRequest(param) {
    let grprst = {};
    axios.defaults.baseURL = baseURL1;
    let promise = axios({
      method: param.method,
      url: param.url,
      data: param.data,
    });
    promise.then((response) => {
      console.log("Success! ");
      grprst = response.data;
      this.GRPread(grprst.data);
    });
    promise.catch((response) => {
      console.log("Error! ", response);
    });
  }
  render() {
    return (
      <div>
        <LOCtable LOCdata={this.state.LOCdata} GRPdata={this.state.GRPdata} />
      </div>
    );
  }
}

export default index;
