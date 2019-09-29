import React, { Component } from "react";
import Title from "./../components/voyage/Title";
import DateTime from "./../components/voyage/DateTime";
import InputField from "./../components/voyage/InputField";
import Dropdown from "./../components/voyage/Dropdown";
import Checkbox from "./../components/voyage/Checkbox";

class StartVoyage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vessels: [],
      portNames: [], //holds the list of harbours {name, lat, depth & lat}
      departure_position: {}, // departure: {lat & lon}
      arrival_position: {}, // arrival: {lat & lon}
      optimizationType: [],
      vessel_id: 0,
      hire_rate: "",
      ETD: "",
      ETA: "",
      // optimization_type: "",
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
      fuelCost_Unit: "USD"
      //accuracy
    };
  }

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

  handleVesselSelection = e => {
    const selectedIndex = e.target.selectedIndex;
    const vessel_id = this.state.vessels[selectedIndex].id;
    this.setState({ vessel_id: vessel_id });
  };

  handleDeparturePortSelection = e => {
    const selectedIndex = e.target.selectedIndex;
    const departure_position = {
      longitude: this.state.portNames[selectedIndex].lon,
      latitude: this.state.portNames[selectedIndex].lat
    };
    this.setState({ departure_position: departure_position });
  };

  handleArrivalPortSelection = e => {
    const selectedIndex = e.target.selectedIndex;
    const arrival_position = {
      longitude: this.state.portNames[selectedIndex].lon,
      latitude: this.state.portNames[selectedIndex].lat
    };
    this.setState({ arrival_position: arrival_position });
  };

  render() {
    const {
      optimizationType,
      departureDate,
      departureTime,
      arrivalDate,
      arrivalTime,
      forward_draft,
      aft_draft,
      lfso_cost,
      hfo_cost
    } = this.state;

    const {
      vessels,
      portNames,
      min_Draft,
      max_Draft,
      draft_StepSize,
      draft_Unit,
      min_fuelCost,
      max_fuelCost,
      fuelCost_stepSize,
      fuelCost_Unit
      //accuracy
    } = this.props;

    return (
      <div>
        <form>
          <Title title=" Start Voyage " />
          <br />
          <Dropdown
            label=" Choose vessel "
            optionsMap={vessels}
            handleSelection={this.handleVesselSelection}
          />
          <br />
          <Checkbox label=" Chartered vessel " />
          <br />
          <Dropdown
            label=" Depart from "
            optionsMap={portNames}
            handleSelection={this.handleDeparturePortSelection}
          />
          <br />
          <DateTime
            label=" Estimated Departure (ETD) "
            name="ETD"
            date={departureDate}
            time={departureTime}
            onDateInputChange={this.handleDateInputChange}
            onTimeInputChange={this.handleTimeInputChange}
          />
          <br />
          <Dropdown
            label=" Destination "
            optionsMap={portNames}
            handleSelection={this.handleArrivalPortSelection}
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
          <Dropdown label=" Optimisation type " optionsMap={optimizationType} />
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
