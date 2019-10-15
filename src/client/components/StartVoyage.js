import React, { Component } from "react";
import DateTime from "./DateTime";
import InputFieldNumber from "./InputFieldNumber";
import Dropdown from "./Dropdown";
import Checkbox from "./Checkbox";
import PropTypes from "prop-types";

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

    const { vessels, ports, voyages } = this.props;

    let checkBoxLogic;
    if (this.state.isChecked === true) {
      checkBoxLogic = (
        <InputFieldNumber
          label="Hire Rate"
          name="hirerate"
          unit="USD"
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
            optionNameKey="name"
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
            optionNameKey="name"
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
            optionNameKey="name"
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
            optionsMap={voyages}
            optionNameKey="optimisation_type"
            handleSelection={this.handleOptimisationTypeSelection}
          />
          <InputFieldNumber
            label="Forward Draft"
            name="forwarddraft"
            unit="m"
            value={forwarddraft}
            onDataInputChange={this.handleDataInputChange}
          />
          <InputFieldNumber
            label="Aft Draft"
            name="aftdraft"
            unit="m"
            value={aftdraft}
            onDataInputChange={this.handleDataInputChange}
          />
          <InputFieldNumber
            label="Low Sulfor Fuel Oil Cost"
            name="lfsocost"
            unit="USD"
            value={lfsocost}
            onDataInputChange={this.handleDataInputChange}
          />
          <InputFieldNumber
            label="Heavy Fuel Oil Cost"
            name="hfocost"
            unit="USD"
            value={hfocost}
            onDataInputChange={this.handleDataInputChange}
          />
        </form>
      </div>
    );
  }
}
StartVoyage.PropTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  fuelCost_unit: PropTypes.string,
  draft_unit: PropTypes.string,
  rate_unit: PropTypes.string,
  departureDate: PropTypes.string,
  departureTime: PropTypes.string,
  arrivalDate: PropTypes.string,
  arrivalTime: PropTypes.string,
  hirerate: PropTypes.number,
  forwarddraft: PropTypes.number,
  aftdraft: PropTypes.number,
  lfsocost: PropTypes.number,
  hfocost: PropTypes.number,
  handleVesselSelection: PropTypes.func,
  handleToggleCheckbox: PropTypes.func,
  handleOptimisationTypeSelection: PropTypes.func,
  handleDeparturePortSelection: PropTypes.func,
  handleArrivalPortSelection: PropTypes.func,
  handleTimeInputChange: PropTypes.func,
  handleDateInputChange: PropTypes.func,
  handleDataInputChange: PropTypes.func,

  voyages: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  ports: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  vessels: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])
};

export default StartVoyage;
