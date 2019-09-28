import React, { Component } from "react";
import Title from "./../components/voyage/Title";
import DateTime from "./../components/voyage/DateTime";
import InputField from "./../components/voyage/InputField";

class StartVoyage extends Component {
  state = {
    vessel: [], // vessel: {name & id}
    harbourList: [], //holds the list of harbours {name, lat, depth & lat}
    departure_position: [], // departure: {lat & lon}
    arrival_position: [], // arrival: {lat & lon}
    hire_rate: "",
    ETD: "",
    ETA: "",
    optimization_type: "",
    forward_draft: "",
    aft_draft: "",
    lfso_cost: "",
    hfo_cost: "",
    departureDate: "",
    departureTime: "",
    arrivalDate: "",
    arrivalTime: "",
    // input field props
    min_Draft: 0.01,
    max_Draft: 99.99,
    draft_StepSize: 0.5,
    draft_Unit: "m",
    min_fuelCost: 0.01,
    max_fuelCost: 99.99,
    fuelCost_stepSize: 0.5,
    //accuracy,
    fuelCost_Unit: "USD"
  };

  handleDateInputChange = e => {
    const target = e.target;
    const { name, value } = target;
    const dateDescr = name === "ETD" ? "departureDate" : "arrivalDate";
    this.setState({ [dateDescr]: value });
  };

  handleTimeInputChange = e => {
    const target = e.target;
    const { name, value } = target;
    const timeDescr = name === "ETD" ? "departureTime" : "arrivalTime";
    this.setState({ [timeDescr]: value });
  };

  handleDataInputChange = e => {
    const target = e.target;
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      departureDate,
      departureTime,
      arrivalDate,
      arrivalTime,
      forward_draft,
      aft_draft,
      lfso_cost,
      hfo_cost,
      min_Draft,
      max_Draft,
      draft_StepSize,
      draft_Unit,
      min_fuelCost,
      max_fuelCost,
      fuelCost_stepSize,
      //accuracy,
      fuelCost_Unit
    } = this.state;

    return (
      <div>
        <form>
          <Title title=" Start Voyage " />
          <DateTime
            label=" Estimated Departure (ETD) "
            name="ETD"
            date={departureDate}
            time={departureTime}
            onDateInputChange={this.handleDateInputChange}
            onTimeInputChange={this.handleTimeInputChange}
          />
          <br />
          <DateTime
            label=" Estimated Arrival (ETA) "
            name="ETA"
            date={arrivalDate}
            time={arrivalTime}
            onDateInputChange={this.handleDateInputChange}
            onTimeInputChange={this.handleTimeInputChange}
          />
          <br />
          <InputField
            label=" Forward Draft "
            name="forward_draft"
            min={min_Draft}
            max={max_Draft}
            step={draft_StepSize}
            unit={draft_Unit}
            value={forward_draft}
            //accuracy={accuracy}
            onDataInputChange={this.handleDataInputChange}
          />
          <br />
          <InputField
            label=" Aft Draft "
            name="aft_draft"
            min={min_Draft}
            max={max_Draft}
            step={draft_StepSize}
            unit={draft_Unit}
            value={aft_draft}
            //accuracy={accuracy}
            onDataInputChange={this.handleDataInputChange}
          />
          <br />
          <InputField
            label=" Low Sulfor Fuel Oil Cost "
            name="lfso_cost"
            min={min_fuelCost}
            max={max_fuelCost}
            step={fuelCost_stepSize}
            unit={fuelCost_Unit}
            value={lfso_cost}
            //accuracy={accuracy}
            onDataInputChange={this.handleDataInputChange}
          />
          <br />
          <InputField
            label=" Heavy Fuel Oil Cost "
            name="hfo_cost"
            min={min_fuelCost}
            max={max_fuelCost}
            step={fuelCost_stepSize}
            unit={fuelCost_Unit}
            value={hfo_cost}
            //accuracy={accuracy}
            onDataInputChange={this.handleDataInputChange}
          />
          <br />
        </form>
      </div>
    );
  }
}
export default StartVoyage;
