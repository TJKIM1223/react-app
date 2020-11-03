import { Component } from "react";

class HOME extends Component {
  render() {
    return (
      <div>
        <div>HELLO?</div>
        <div>
          <button
            onClick={() =>
              window.open(
                "/locinfo",
                "LOCINFO",
                "width=1500, height=500,menubar=1, "
              )
            }
          >
            IMSI
          </button>
        </div>
      </div>
    );
  }
}

export default HOME;
