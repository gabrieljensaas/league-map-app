import React, { Component } from "react";
import map from "../Image/img-lol-map.svg";
import MapContents from "./mapContents";

class Map extends Component {
  stylemap = {
    position: "relative",
    width: 300,
    height: 300,
    backgroundImage: `URL(${map})`,
    // backgroundImage:
    //   "URL(http://ddragon.leagueoflegends.com/cdn/6.8.1/img/map/map11.png)",
  };
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <div className="map-container" style={this.stylemap}>
            {/* <img src={map} alt="map" style={{ position: "absolute" }} /> */}
            <MapContents />
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default Map;
