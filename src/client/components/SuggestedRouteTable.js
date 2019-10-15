import React from "react";
import "@storybook/addon-knobs/register";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const SuggestedRouteTable = props => {
  const tableCellName = props.tableNames;
  return (
    <div>
      <h3>SELECTED ROUTE</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{tableCellName[0]}</TableCell>
            <TableCell align="right">{tableCellName[1]}</TableCell>
            <TableCell align="right">{tableCellName[2]}</TableCell>
            <TableCell align="right">{tableCellName[3]}</TableCell>
            <TableCell align="right">{tableCellName[4]}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map(row => (
            <TableRow key={row.key}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.latitude}</TableCell>
              <TableCell align="right">{row.longitude}</TableCell>
              <TableCell align="right">{row.speed}</TableCell>
              <TableCell align="right">{row.estimated_rpm}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h4>Currently optimizing for the cheapest possible route.</h4>
    </div>
  );
};

export default SuggestedRouteTable;
