import React, { Component } from "react";
import DateTime from "./DateTime";
import InputFieldNumber from "./InputFieldNumber";
import Dropdown from "./Dropdown";
import Checkbox from "./Checkbox";

class StartVoyage extends Component {
  state = {
    vessels: [],
    ports: [],
    optimisationType: [],
    departure_position: {},
    arrival_position: {},
    vessel_id: 0,
    departure_time: "",
    target_arrival_time: "",
    optimisation_type: {},
    hirerate: "",
    forwarddraft: "",
    aftdraft: "",
    lfsocost: "",
    hfocost: "",
    departureDate: "",
    departureTime: "",
    arrivalDate: "",
    arrivalTime: "",
    isChecked: false
  };

  static defaultProps = {
    draft_step: 0.01,
    draft_unit: "m",
    fuelCost_step: 0.01,
    fuelCost_unit: "USD",
    rate_step: 0.01,
    rate_unit: "USD"
  };

  handleDateInputChange = e => {
    const target = e.target;
    const { name, value } = target;
    const date = name === "departure_time" ? "departureDate" : "arrivalDate";
    this.setState({ [date]: value });
  };

  handleTimeInputChange = e => {
    const target = e.target;
    const { name, value } = target;
    const time = name === "departure_time" ? "departureTime" : "arrivalTime";
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
      longitude: this.state.ports[selectedIndex].longitude,
      latitude: this.state.ports[selectedIndex].latitude
    };
    this.setState({ departure_position });
  };

  handleArrivalPortSelection = e => {
    const selectedIndex = e.target.selectedIndex;
    const arrival_position = {
      longitude: this.state.ports[selectedIndex].longitude,
      latitude: this.state.ports[selectedIndex].latitude
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
      hirerate,
      forwarddraft,
      aftdraft,
      lfsocost,
      hfocost
    } = this.state;

    const {
      vessels,
      ports,
      voyages, //optimisationType
      draft_step,
      draft_unit,
      fuelCost_step,
      fuelCost_unit,
      rate_step,
      rate_unit
    } = this.props;

    let checkBoxLogic;
    if (this.state.isChecked === true) {
      checkBoxLogic = (
        <InputFieldNumber
          label="Hire Rate"
          name="hirerate"
          step={rate_step}
          unit={rate_unit}
          value={hirerate}
          onDataInputChange={this.handleDataInputChange}
        />
      );
    }
    return (
      <div>
        <form>
          <Dropdown
            label="Choose vessel"
            optionsMap={vessels}
            handleSelection={this.handleVesselSelection}
          />
          <Checkbox
            label="Chartered vessel"
            handleCheckbox={this.handleToggleCheckbox}
          />

          {checkBoxLogic}

          <Dropdown
            label="Depart from"
            optionsMap={ports}
            handleSelection={this.handleDeparturePortSelection}
          />
          <DateTime
            label="Departure time"
            name="departure_time"
            date={departureDate}
            time={departureTime}
            onDateInputChange={this.handleDateInputChange}
            onTimeInputChange={this.handleTimeInputChange}
          />
          <Dropdown
            label="Destination"
            optionsMap={ports}
            handleSelection={this.handleArrivalPortSelection}
          />
          <DateTime
            label="Arrival time"
            name="target_arrival_time"
            date={arrivalDate}
            time={arrivalTime}
            onDateInputChange={this.handleDateInputChange}
            onTimeInputChange={this.handleTimeInputChange}
          />
          <Dropdown
            label="Optimisation type"
            optionsMap={voyages} //optimisationType
            handleSelection={this.handleOptimisationTypeSelection}
          />
          <InputFieldNumber
            label="Forward Draft"
            name="forwarddraft"
            step={draft_step}
            unit={draft_unit}
            value={forwarddraft}
            onDataInputChange={this.handleDataInputChange}
          />
          <InputFieldNumber
            label="Aft Draft"
            name="aftdraft"
            step={draft_step}
            unit={draft_unit}
            value={aftdraft}
            onDataInputChange={this.handleDataInputChange}
          />
          <InputFieldNumber
            label="Low Sulfor Fuel Oil Cost"
            name="lfsocost"
            step={fuelCost_step}
            unit={fuelCost_unit}
            value={lfsocost}
            onDataInputChange={this.handleDataInputChange}
          />
          <InputFieldNumber
            label="Heavy Fuel Oil Cost"
            name="hfocost"
            step={fuelCost_step}
            unit={fuelCost_unit}
            value={hfocost}
            onDataInputChange={this.handleDataInputChange}
          />
        </form>
      </div>
    );
  }
}
export default StartVoyage;
