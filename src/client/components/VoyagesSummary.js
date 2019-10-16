import React from "react";
import "@storybook/addon-knobs/register";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const VoyageSummary = props => {
  const tableCellName = props.tableNames;
  return (
    <div>
      <h3>{props.name}</h3>
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
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.departure}</TableCell>
              <TableCell align="right">{row.destination}</TableCell>
              <TableCell align="right">{row.cost}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default VoyageSummary;
