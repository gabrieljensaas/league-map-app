import React, { Component } from "react";
import Objects from "./Components/objects";
import "./App.css";

class App extends Component {
  state = {
    // mapData: [
    //   { object1: { url: "", posX: 4424, posY: 13737 } },
    //   { object2: { url: "", posX: 394, posY: 461 } },
    //   { object3: { url: "", posX: 8265, posY: 7131 } },
    //   { object4: { url: "", posX: 8397, posY: 7552 } },
    //   { object5: { url: "", posX: 6686, posY: 6602 } },
    //   { object6: { url: "", posX: 13562, posY: 14272 } },
    //   { object7: { url: "", posX: 7404, posY: 6738 } },
    //   { object8: { url: "", posX: 7672, posY: 6762 } },
    //   { object9: { url: "", posX: 11026, posY: 1389 } },
    //   { object10: { url: "", posX: 8479, posY: 6706 } },
    // ],
  };
  render() {
    return (
      <React.Fragment>
        <main className="container">
          <Objects object={this.state.objects} />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
