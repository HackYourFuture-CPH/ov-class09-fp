import React from "react";
import "@storybook/addon-knobs/register";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import CardHeader from "@material-ui/core/CardHeader";

const useStyles = makeStyles({
  card: {
    minWidth: 300,
    marginTop: "0.75rem",
    marginRight: "0.75rem",
    marginLeft: "0.75rem"
  },
  headerTitle: {
    color: "#0D0D0D",
    fontSize: "1.5rem"
  },
  infoTitle: {
    color: "#595959",
    fontSize: "0.9rem"
  },
  describeText: {
    color: "#262626",
    fontSize: "1.2rem"
  },
  button: {
    fontSize: "1.25rem",
    fontWeight: "bold",
    color: "#0B3C61"
  },
  bottom: {
    marginTop: 10,
    paddingLeft: 200
  }
});

const SuggestedRouteTable = ({ data, tableNames }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader className={classes.headerTitle} title="SELECTED ROUTE" />
      <CardContent>
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
              <TableRow key={row.key}>
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
        <Typography variant="h6" component="h6" className={classes.bottom}>
          Currently optimizing for the cheapest possible route.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SuggestedRouteTable;
