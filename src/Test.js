import React from "react";

export default class Test extends React.Component {
  state = {
    newVal: 1
  };

  handlePress = () => {
    setTimeout(function () {
      this.setState({ newVal: 5 });
    }, 200);
  };

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <button onClick={this.handlePress}>
          <p>Click me too!</p>
        </button>
        <p>{this.state.newVal}</p>
      </div>
    );
  }
}
