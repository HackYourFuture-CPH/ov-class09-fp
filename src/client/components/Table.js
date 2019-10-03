import React from "react";
import "@storybook/addon-knobs/register";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import { object } from "@storybook/addon-knobs";

export function TableStory() {
  const data = object("Data", [
    {
      date: "2019-02-21 01:58:33",
      latitude: 37.1270988,
      longitude: -8.2439177,
      speed: 16,
      estimated_prm: 67
    },
    {
      date: "2018-12-31 15:08:42",
      latitude: 26.630845,
      longitude: 106.750625,
      speed: 19,
      estimated_prm: 93
    },
    {
      date: "2019-01-01 09:08:50",
      latitude: 28.650932,
      longitude: 86.435767,
      speed: 19,
      estimated_prm: 61
    }
  ]);
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>DATE</TableCell>
            <TableCell align="right">LATITUDE</TableCell>
            <TableCell align="right">LONGTIDUE</TableCell>
            <TableCell align="right">SPEED</TableCell>
            <TableCell align="right">EST.RPM</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map(row => (
            <TableRow key={row.key}>
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell align="right">{row.latitude}</TableCell>
              <TableCell align="right">{row.longitude}</TableCell>
              <TableCell align="right">{row.speed}</TableCell>
              <TableCell align="right">{row.estimated_prm}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
