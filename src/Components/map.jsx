import React, { Component } from "react";
import map from "../Image/img-lol-map.svg";
import MapContents from "./mapContents";
import Slider from './slider';
class Map extends Component {
  stylemap = {
    position: "relative",
    width: 300,
    height: 300,
    backgroundImage: `URL(${map})`,
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
