import React, { Component } from "react";
import Tower from "./tower";

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

  // lane = ["TOP_LANE", "MID_LANE", "BOT_LANE"];
  // towers = [];

  render() {
    const setPosStyle = (posX, posY, img) => {
      return {
        position: "absolute",
        left: this.getPositionRelativeToMap(posX),
        bottom: this.getPositionRelativeToMap(posY),
        color: "white",
        backgroundImage: `URL(${img})`,
      };
    };

    const innerTopLane = Tower(
      "TOP_LANE",
      "INNER_TURRET",
      "1512",
      "6699",
      "url"
    );
    const innerMidLane = Tower(
      "MID_LANE",
      "INNER_TURRET",
      "5048",
      "4812",
      "url"
    );
    const innerBotLane = Tower(
      "BOT_LANE",
      "INNER_TURRET",
      "6919",
      "1483",
      "url"
    );
    const redInnerTopLane = Tower(
      "TOP_LANE",
      "INNER_TURRET",
      "7943",
      "13411",
      "url"
    );
    const redInnerMidLane = Tower(
      "MID_LANE",
      "INNER_TURRET",
      "9767",
      "10113",
      "url"
    );
    const redInnerBotLane = Tower(
      "BOT_LANE",
      "INNER_TURRET",
      "13327",
      "8226",
      "url"
    );

    const outerTopLane = Tower(
      "TOP_LANE",
      "OUTER_TURRET",
      "981",
      "10441",
      "url"
    );
    const outerMidLane = Tower(
      "MID_LANE",
      "OUTER_TURRET",
      "5846",
      "6396",
      "url"
    );
    const outerBotLane = Tower(
      "BOT_LANE",
      "OUTER_TURRET",
      "10504",
      "1029",
      "url"
    );
    const redOuterTopLane = Tower(
      "TOP_LANE",
      "OUTER_TURRET",
      "4318",
      "13875",
      "url"
    );
    const redOuterMidLane = Tower(
      "MID_LANE",
      "OUTER_TURRET",
      "8955",
      "8510",
      "url"
    );
    const redOuterBotLane = Tower(
      "BOT_LANE",
      "OUTER_TURRET",
      "13866",
      "4505",
      "url"
    );

    const baseTopLane = Tower("TOP_LANE", "BASE_TURRET", "1169", "4287", "url");
    const baseMidLane = Tower("MID_LANE", "BASE_TURRET", "3651", "3696", "url");
    const baseBotLane = Tower("BOT_LANE", "BASE_TURRET", "4281", "1253", "url");
    const redBaseTopLane = Tower(
      "TOP_LANE",
      "BASE_TURRET",
      "10481",
      "13650",
      "url"
    );
    const redBaseMidLane = Tower(
      "MID_LANE",
      "BASE_TURRET",
      "11134",
      "11207",
      "url"
    );
    const redBaseBotLane = Tower(
      "BOT_LANE",
      "BASE_TURRET",
      "13624",
      "10572",
      "url"
    );

    const inhibTopLane = Tower(
      "TOP_LANE",
      "INHIBITOR_TURRET",
      "1169",
      "3573",
      "url"
    );
    const inhibMidLane = Tower(
      "MID_LANE",
      "INHIBITOR_TURRET",
      "3203",
      "3208",
      "url"
    );
    const inhibBotLane = Tower(
      "BOT_LANE",
      "INHIBITOR_TURRET",
      "3453",
      "1241",
      "url"
    );
    const redInhibTopLane = Tower(
      "TOP_LANE",
      "INHIBITOR_TURRET",
      "11261",
      "13659",
      "url"
    );
    const redInhibMidLane = Tower(
      "MID_LANE",
      "INHIBITOR_TURRET",
      "11603",
      "11667",
      "url"
    );
    const redInhibBotLane = Tower(
      "BOT_LANE",
      "INHIBITOR_TURRET",
      "13598",
      "11316",
      "url"
    );

    const nexusMidLane1 = Tower("MID_LANE", "NEXUS_TURRET", "1748", "2270", "url");
    const nexusMidLane2 = Tower("MID_LANE", "NEXUS_TURRET", "2177", "1807", "url");
    const redNexusMidLane1 = Tower(
      "MID_LANE",
      "NEXUS_TURRET",
      "12611",
      "13084",
      "url"
    );
    const redNexusMidLane2 = Tower(
      "MID_LANE",
      "NEXUS_TURRET",
      "13052",
      "12612",
      "url"
    );

    return (
      <React.Fragment>
        {/* <div className="champion">
          {this.participants.map((participant, index) => (
            <li
              key={index}
              className="participant"
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
        </div> */}
        <div className="tower-blue">
          <div className="nexus">
            <li
              className="mid"
              style={setPosStyle(
                nexusMidLane1.posX,
                nexusMidLane1.posY,
                nexusMidLane1.imgURL
              )}
            >
              NM1
            </li>
            <li
              className="mid"
              style={setPosStyle(
                nexusMidLane2.posX,
                nexusMidLane2.posY,
                nexusMidLane2.imgURL
              )}
            >
              NM2
            </li>
          </div>
          <div className="Inhibitor">
            <li
              className="top"
              style={setPosStyle(
                inhibTopLane.posX,
                inhibTopLane.posY,
                inhibTopLane.imgURL
              )}
            >
              IT
            </li>
            <li
              className="mid"
              style={setPosStyle(
                inhibMidLane.posX,
                inhibMidLane.posY,
                inhibMidLane.imgURL
              )}
            >
              IM
            </li>
            <li
              className="bot"
              style={setPosStyle(
                inhibBotLane.posX,
                inhibBotLane.posY,
                inhibBotLane.imgURL
              )}
            >
              IB
            </li>
          </div>
          <div className="base">
            <li
              className="top"
              style={setPosStyle(
                baseTopLane.posX,
                baseTopLane.posY,
                baseTopLane.imgURL
              )}
            >
              BT
            </li>
            <li
              className="mid"
              style={setPosStyle(
                baseMidLane.posX,
                baseMidLane.posY,
                baseMidLane.imgURL
              )}
            >
              BM
            </li>
            <li
              className="bot"
              style={setPosStyle(
                baseBotLane.posX,
                baseBotLane.posY,
                baseBotLane.imgURL
              )}
            >
              BB
            </li>
          </div>
          <div className="outer">
            <li
              className="top"
              style={setPosStyle(
                outerTopLane.posX,
                outerTopLane.posY,
                outerTopLane.imgURL
              )}
            >
              OT
            </li>
            <li
              className="mid"
              style={setPosStyle(
                outerMidLane.posX,
                outerMidLane.posY,
                outerMidLane.imgURL
              )}
            >
              OM
            </li>
            <li
              className="bot"
              style={setPosStyle(
                outerBotLane.posX,
                outerBotLane.posY,
                outerBotLane.imgURL
              )}
            >
              OB
            </li>
          </div>
          <div className="inner">
            <li
              className="top"
              style={setPosStyle(
                innerTopLane.posX,
                innerTopLane.posY,
                innerTopLane.imgURL
              )}
            >
              InnT
            </li>
            <li
              className="mid"
              style={setPosStyle(
                innerMidLane.posX,
                innerMidLane.posY,
                innerMidLane.imgURL
              )}
            >
              InnM
            </li>
            <li
              className="bot"
              style={setPosStyle(
                innerBotLane.posX,
                innerBotLane.posY,
                innerBotLane.imgURL
              )}
            >
              InnB
            </li>
          </div>
        </div>
        <div className="tower-red">
          <div className="nexus">
            <li
              className="mid"
              style={setPosStyle(
                redNexusMidLane1.posX,
                redNexusMidLane1.posY,
                redNexusMidLane1.imgURL
              )}
            >
              NM1
            </li>
            <li
              className="mid"
              style={setPosStyle(
                redNexusMidLane2.posX,
                redNexusMidLane2.posY,
                redNexusMidLane2.imgURL
              )}
            >
              NM2
            </li>
          </div>
          <div className="Inhibitor">
            <li
              className="top"
              style={setPosStyle(
                redInhibTopLane.posX,
                redInhibTopLane.posY,
                redInhibTopLane.imgURL
              )}
            >
              IT
            </li>
            <li
              className="mid"
              style={setPosStyle(
                redInhibMidLane.posX,
                redInhibMidLane.posY,
                redInhibMidLane.imgURL
              )}
            >
              IM
            </li>
            <li
              className="bot"
              style={setPosStyle(
                redInhibBotLane.posX,
                redInhibBotLane.posY,
                redInhibBotLane.imgURL
              )}
            >
              IB
            </li>
          </div>
          <div className="base">
            <li
              className="top"
              style={setPosStyle(
                redBaseTopLane.posX,
                redBaseTopLane.posY,
                redBaseTopLane.imgURL
              )}
            >
              BT
            </li>
            <li
              className="mid"
              style={setPosStyle(
                redBaseMidLane.posX,
                redBaseMidLane.posY,
                redBaseMidLane.imgURL
              )}
            >
              BM
            </li>
            <li
              className="bot"
              style={setPosStyle(
                redBaseBotLane.posX,
                redBaseBotLane.posY,
                redBaseBotLane.imgURL
              )}
            >
              BB
            </li>
          </div>
          <div className="outer">
            <li
              className="top"
              style={setPosStyle(
                redOuterTopLane.posX,
                redOuterTopLane.posY,
                redOuterTopLane.imgURL
              )}
            >
              OT
            </li>
            <li
              className="mid"
              style={setPosStyle(
                redOuterMidLane.posX,
                redOuterMidLane.posY,
                redOuterMidLane.imgURL
              )}
            >
              OM
            </li>
            <li
              className="bot"
              style={setPosStyle(
                redOuterBotLane.posX,
                redOuterBotLane.posY,
                redOuterBotLane.imgURL
              )}
            >
              OB
            </li>
          </div>
          <div className="inner">
            <li
              className="top"
              style={setPosStyle(
                redInnerTopLane.posX,
                redInnerTopLane.posY,
                redInnerTopLane.imgURL
              )}
            >
              InnT
            </li>
            <li
              className="mid"
              style={setPosStyle(
                redInnerMidLane.posX,
                redInnerMidLane.posY,
                redInnerMidLane.imgURL
              )}
            >
              InnM
            </li>
            <li
              className="bot"
              style={setPosStyle(
                redInnerBotLane.posX,
                redInnerBotLane.posY,
                redInnerBotLane.imgURL
              )}
            >
              InnB
            </li>
          </div>
        </div>
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
