import React from "react";
import "@storybook/addon-knobs/register";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const SuggestedRouteTable = ({ data, tableNames }) => {
  return (
    <div>
      <h3>SELECTED ROUTE</h3>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>{tableNames[0]}</TableCell>
            <TableCell align="right">{tableNames[1]}</TableCell>
            <TableCell align="right">{tableNames[2]}</TableCell>
            <TableCell align="right">{tableNames[3]}</TableCell>
            <TableCell align="right">{tableNames[4]}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.createdAt}
              </TableCell>
              <TableCell align="right">{row.latitude}</TableCell>
              <TableCell align="right">{row.longitude}</TableCell>
              <TableCell align="right">{row.speed}</TableCell>
              <TableCell align="right">{row.rpm}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h4>Currently optimizing for the cheapest possible route.</h4>
    </div>
  );
};

export default SuggestedRouteTable;
