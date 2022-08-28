import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 12,
    errorText: "",
  };

  handleInputChanged = (event) => {
    alert(1);
    const value = event.target.value;
    console.log("value: ", value);

    if (value <= 0 || value > 32) {
      this.setState({
        numberOfEvents: 0,
        errorText: "Select a number from 1 to 32",
      });
    } else {
      this.setState({
        numberOfEvents: value,
        errorText: "",
      });
    }
    this.props.updateNumberOfEvents("undefined", value);
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <ErrorAlert id="errorAlert" text={this.state.errorText} />
        <h3>Number of events to display</h3>
        <input
          className="number-of-events"
          type="number"
          value={this.state.numberOfEvents}
          onChange={this.handleInputChanged}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
