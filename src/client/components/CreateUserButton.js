import React, { Component } from "react";
import CreateUser from "./CreateUser";
import Button from "./Button";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

const createUserStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function CreateUserButton(props) {
  const classes = createUserStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        className={classes.paper}
        label={"CREATE USER"}
        handleClick={handleOpen}
      />
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
          <CreateUser
            classes={classes}
            handleClose={handleClose}
            handleChange={props.handleChange}
            handleCreate={props.handleCreate}
            state={props.state}
            organizationOptions={props.organizationOptions}
          />
        </Fade>
      </Modal>
    </div>
  );
}
