import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  return (
    <>
      <div className={classes.backdrop} />
      <Card className={classes.modal}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <Button>Okay</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
