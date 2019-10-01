import React, { Component } from "react";
import Title from "./Title";
import DateTime from "./DateTime";
import InputField from "./InputField";
import Dropdown from "./Dropdown";
import Checkbox from "./Checkbox";

class StartVoyage extends Component {
  constructor(props) {
    super(props);

    this.state = {
<<<<<<< HEAD
      vessels: {},
      portNames: {}, //holds the list of harbours {name, lat, depth & lat}
=======
      vessels: [],
      ports: [], //holds the list of harbours {name, lat, depth & lat}
      optimisationType: [], // optimisationType: {id, optimisation_type}
>>>>>>> 603dfe2ffe240e2d255babb034d451bc0d3ea807
      departure_position: {}, // departure: {lat & lon}
      arrival_position: {}, // arrival: {lat & lon}
      vessel_id: 0,
      ETD: "",
      ETA: "",
      optimisation_type: {},
      hire_rate: "",
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
      fuelCost_Unit: "USD",
      min_rate: 0.01,
      max_rate: 99.99,
      rate_stepSize: 0.5,
      rate_Unit: "USD"
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
      longitude: this.state.ports[selectedIndex].lon,
      latitude: this.state.ports[selectedIndex].lat
    };
    this.setState({ departure_position: departure_position });
  };

  handleArrivalPortSelection = e => {
    const selectedIndex = e.target.selectedIndex;
    const arrival_position = {
      longitude: this.state.ports[selectedIndex].lon,
      latitude: this.state.ports[selectedIndex].lat
    };
    this.setState({ arrival_position: arrival_position });
  };
  handleOptimisationTypeSelection = e => {
    const selectedIndex = e.target.selectedIndex;
    const optimisation_type = {
      optimisation_type: this.state.optimisationType[selectedIndex]
        .optimisation_type
    };
    this.setState({ optimisation_type: optimisation_type });
  };

  render() {
    const {
      departureDate,
      departureTime,
      arrivalDate,
      arrivalTime,
      hire_rate,
      forward_draft,
      aft_draft,
      lfso_cost,
      hfo_cost
    } = this.state;

    const {
      vessels,
      ports,
      optimisationType,
      min_Draft,
      max_Draft,
      draft_StepSize,
      draft_Unit,
      min_fuelCost,
      max_fuelCost,
      fuelCost_stepSize,
      fuelCost_Unit,
      min_rate,
      max_rate,
      rate_stepSize,
      rate_Unit
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
          <InputField
            label=" Hire Rate "
            name="hire_rate"
            min={min_rate}
            max={max_rate}
            step={rate_stepSize}
            unit={rate_Unit}
            value={hire_rate}
            //accuracy={accuracy}
            onDataInputChange={this.handleDataInputChange}
          />
          <br />
          <Dropdown
            label=" Depart from "
            optionsMap={ports}
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
            optionsMap={ports}
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
          <Dropdown
            label=" Optimisation type "
            optionsMap={optimisationType}
            handleSelection={this.handleOptimisationTypeSelection}
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
