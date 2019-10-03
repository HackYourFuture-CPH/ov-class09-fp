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
      vessels: [],
      ports: [],
      optimisationType: [],
      departure_position: {},
      arrival_position: {},
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
      isChecked: false,

      // input field props
      draft_min: 0.0,
      draft_max: 99.99,
      draft_step: 0.01,
      draft_unit: "m",
      fuelCost_min: 0.0,
      fuelCost_max: 99.99,
      fuelCost_step: 0.01,
      fuelCost_unit: "USD",
      rate_min: 0.0,
      rate_max: 99.99,
      rate_step: 0.01,
      rate_unit: "USD"
    };
  }

  handleDateInputChange = e => {
    const target = e.target;
    const { name, value } = target;
    const date = name === "ETD" ? "departureDate" : "arrivalDate";
    this.setState({ [date]: value });
  };

  handleTimeInputChange = e => {
    const target = e.target;
    const { name, value } = target;
    const time = name === "ETD" ? "departureTime" : "arrivalTime";
    this.setState({ [time]: value });
  };
  handleToggleCheckbox = e => {
    this.setState({ isChecked: !this.state.isChecked });
  };

  handleDataInputChange = e => {
    const target = e.target;
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleVesselSelection = e => {
    const selectedIndex = e.target.selectedIndex;
    const vessel_id = this.state.vessels[selectedIndex].id;
    this.setState({ vessel_id });
  };

  handleDeparturePortSelection = e => {
    const selectedIndex = e.target.selectedIndex;
    const departure_position = {
      longitude: this.state.ports[selectedIndex].lon,
      latitude: this.state.ports[selectedIndex].lat
    };
    this.setState({ departure_position });
  };

  handleArrivalPortSelection = e => {
    const selectedIndex = e.target.selectedIndex;
    const arrival_position = {
      longitude: this.state.ports[selectedIndex].lon,
      latitude: this.state.ports[selectedIndex].lat
    };
    this.setState({ arrival_position });
  };
  handleOptimisationTypeSelection = e => {
    const selectedIndex = e.target.selectedIndex;
    const optimisation_type = {
      optimisation_type: this.state.optimisationType[selectedIndex]
        .optimisation_type
    };
    this.setState({ optimisation_type });
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
      hfo_cost,
      draft_min,
      draft_max,
      draft_step,
      draft_unit,
      fuelCost_min,
      fuelCost_max,
      fuelCost_step,
      fuelCost_unit,
      rate_min,
      rate_max,
      rate_step,
      rate_unit
    } = this.state;

    const { vessels, ports, optimisationType } = this.props;

    let checkBoxLogic;
    if (this.state.isChecked === true) {
      checkBoxLogic = (
        <InputField
          label=" Hire Rate "
          name="hire_rate"
          min={rate_min}
          max={rate_max}
          step={rate_step}
          unit={rate_unit}
          value={hire_rate}
          onDataInputChange={this.handleDataInputChange}
        />
      );
    }
    return (
      <div>
        <form>
          <Title title=" Start Voyage " />

          <Dropdown
            label=" Choose vessel "
            optionsMap={vessels}
            handleSelection={this.handleVesselSelection}
          />
          <Checkbox
            label=" Chartered vessel "
            handleCheckbox={this.handleToggleCheckbox}
          />

          {checkBoxLogic}

          <Dropdown
            label=" Depart from "
            optionsMap={ports}
            handleSelection={this.handleDeparturePortSelection}
          />
          <DateTime
            label=" Estimated Departure (ETD) "
            name="ETD"
            date={departureDate}
            time={departureTime}
            onDateInputChange={this.handleDateInputChange}
            onTimeInputChange={this.handleTimeInputChange}
          />
          <Dropdown
            label=" Destination "
            optionsMap={ports}
            handleSelection={this.handleArrivalPortSelection}
          />
          <DateTime
            label=" Estimated Arrival (ETA) "
            name="ETA"
            date={arrivalDate}
            time={arrivalTime}
            onDateInputChange={this.handleDateInputChange}
            onTimeInputChange={this.handleTimeInputChange}
          />
          <Dropdown
            label=" Optimisation type "
            optionsMap={optimisationType}
            handleSelection={this.handleOptimisationTypeSelection}
          />
          <InputField
            label=" Forward Draft "
            name="forward_draft"
            min={draft_min}
            max={draft_max}
            step={draft_step}
            unit={draft_unit}
            value={forward_draft}
            onDataInputChange={this.handleDataInputChange}
          />
          <InputField
            label=" Aft Draft "
            name="aft_draft"
            min={draft_min}
            max={draft_max}
            step={draft_step}
            unit={draft_unit}
            value={aft_draft}
            onDataInputChange={this.handleDataInputChange}
          />
          <InputField
            label=" Low Sulfor Fuel Oil Cost "
            name="lfso_cost"
            min={fuelCost_min}
            max={fuelCost_max}
            step={fuelCost_step}
            unit={fuelCost_unit}
            value={lfso_cost}
            onDataInputChange={this.handleDataInputChange}
          />
          <InputField
            label=" Heavy Fuel Oil Cost "
            name="hfo_cost"
            min={fuelCost_min}
            max={fuelCost_max}
            step={fuelCost_step}
            unit={fuelCost_unit}
            value={hfo_cost}
            onDataInputChange={this.handleDataInputChange}
          />
        </form>
      </div>
    );
  }
}
export default StartVoyage;
