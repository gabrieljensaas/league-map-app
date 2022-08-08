import React, { Component } from "react";

class MapContent extends Component {
  participants = [
    "participant1",
    "participant2",
    "participant3",
    "participant4",
    "participant5",
    "participant6",
    "participant7",
    "participant8",
    "participant9",
    "participant10",
  ];

  render() {
    return (
      // <li className="" style={this.listStyle}>
      //   {this.props.mapContent.posX}
      //   {/* <div style={{ position: "relative" }}>
      //     <div></div>
      //   </div> */}
      // </li>
      <React.Fragment>
        {this.participants.map((participant, index) => (
          <li
            key={index}
            style={{
              position: "absolute",
              left: this.getPositionX(participant),
              bottom: this.getPositionY(participant),
              color: "white",
            }}
          >
            P{index + 1}
          </li>
        ))}
      </React.Fragment>
    );
  }

  getPositionX(participant) {
    return this.getPositionRelativeToMap(
      this.props.mapContent[participant].position.x
    );
  }

  getPositionY(participant) {
    return this.getPositionRelativeToMap(
      this.props.mapContent[participant].position.y
    );
  }

  getPositionRelativeToMap(pos) {
    let position = Math.round((pos / 16000) * 100);
    return position + "%";
  }
}

export default MapContent;
