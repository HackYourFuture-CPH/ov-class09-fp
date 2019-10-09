import React from "react";
import "@storybook/addon-knobs/register";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function AllVoyagesComponent({ ongoingVoyages = [], completedVoyages = [] }) {
  return (
    <div>
      <div className="ongoingvoyages">
        <h3>Ongoing Voyages </h3>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ESTIMATED ARRIVAL</TableCell>
              <TableCell align="right">NAME</TableCell>
              <TableCell align="right">DEPARTURE</TableCell>
              <TableCell align="right">DESTINATION</TableCell>
              <TableCell align="right">COST</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {ongoingVoyages.map(row => (
              <TableRow key={row.key}>
                <TableCell component="th" scope="row">
                  {row.estimated_arrival}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.departure}</TableCell>
                <TableCell align="right">{row.destination}</TableCell>
                <TableCell align="right">{row.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="completedvoyages">
        <h3>Completed Voyages </h3>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ARRIVED</TableCell>
              <TableCell align="right">NAME</TableCell>
              <TableCell align="right">DEPARTURE</TableCell>
              <TableCell align="right">DESTINATION</TableCell>
              <TableCell align="right">COST</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {completedVoyages.map(row => (
              <TableRow key={row.key}>
                <TableCell component="th" scope="row">
                  {row.estimated_arrival}
                </TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.departure}</TableCell>
                <TableCell align="right">{row.destination}</TableCell>
                <TableCell align="right">{row.cost}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default AllVoyagesComponent;
