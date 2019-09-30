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
      harbourList: [], //holds the list of harbours {name, lat, depth & lat}
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
      fuelCost_Unit: "USD",
      vessels: [
        { name: "Mirjam", id: 1 },
        { name: "Nord Vantage", id: 2 },
        { name: "Agrigento", id: 3 }
      ],
      portNames: [
        {
          lat: 51.45,
          depth: -11,
          lon: -3.0,
          name: "newpoint"
        },
        {
          lat: 28.1083,
          depth: -333,
          lon: -15.3617,
          name: "las palmas"
        },
        {
          lat: 8.8779,
          depth: 18,
          lon: -79.505985,
          name: "panama_anchorage_pacific"
        },
        {
          lat: 67.5,
          depth: -44,
          lon: -55.0,
          name: "hellefiske"
        },
        {
          lat: 54.03813,
          depth: -19,
          lon: 8.127501,
          name: "hamburg"
        },
        {
          lat: -24.125385,
          depth: -24,
          lon: -46.290725,
          name: "santos"
        },
        {
          lat: -35.61958,
          depth: -14,
          lon: -55.889475,
          name: "racalada"
        },
        {
          lat: -24.125385,
          depth: -24,
          lon: -46.290725,
          name: "santos"
        },
        {
          lat: 9.448638,
          depth: -10,
          lon: -13.7124,
          name: "conakry"
        },
        {
          lat: -1.0862075,
          depth: -22,
          lon: -48.481465,
          name: "vila_do_conde"
        },
        {
          lat: 39.331645,
          depth: -40,
          lon: 22.969835,
          name: "volos_anch"
        },
        {
          lat: 3.7,
          depth: -9,
          lon: 9.5,
          name: "douala"
        },
        {
          lat: 50.609335,
          depth: -17,
          lon: -2.391844,
          name: "portland_anch"
        },
        {
          lat: 72.2,
          depth: -134,
          lon: -80.7,
          name: "milne"
        },
        {
          lat: 52.0584,
          depth: -27,
          lon: 3.378296,
          name: "rotterdam_anch"
        },
        {
          lat: 28.114495,
          depth: -105,
          lon: -15.38717,
          name: "las_palmas_anch"
        },
        {
          lat: 52.028333,
          depth: -24,
          lon: 3.895,
          name: "rotterdam_pilot"
        },
        {
          lat: 3.82,
          depth: -86,
          lon: 8.6,
          name: "douala_deep"
        },
        {
          lat: 5.2066895,
          depth: -50,
          lon: -4.054985,
          name: "abidjan"
        },
        {
          lat: 34.001345,
          depth: -17,
          lon: 10.231738,
          name: "gabes"
        },
        {
          lat: 36.131985,
          depth: -49,
          lon: -5.308113,
          name: "gibraltar_east_anch"
        }
      ],
      departure_position: {},
      arrival_position: {},
      vessel_id: 0
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
      fuelCost_Unit,
      vessels,
      portNames
    } = this.state;

    return (
      <div>
        <form>
          <Title title=" Start Voyage " />
          <br />
          <Dropdown
            label="Choose vessel"
            optionsMap={vessels}
            handleSelection={this.handleVesselSelection}
          />
          <br />
          <Checkbox label="Chartered vessel" />
          <br />
          <Dropdown
            label="Depart from"
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
            label="Destination"
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
