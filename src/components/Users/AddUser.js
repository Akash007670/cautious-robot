import React, { useState, useEffect } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUSer.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enterUsername, setEnterUsername] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const [error, setError] = useState("");

  const addUserHandler = (e) => {
    e.preventDefault();
    if (enterUsername.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please Enter a valid name or age (non empty values).",
      });
      return;
    }
    if (+enterAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please Enter a valid age (> 0).",
      });
      return;
    } else {
      props.onAddUser(enterUsername, enterAge);
      setEnterUsername("");
      setEnterAge("");
    }
  };
  const userNameChangeHandler = (e) => {
    setEnterUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnterAge(e.target.value);
  };

  const errorHadler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.message}
          message={error.title}
          onConfirm={errorHadler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Userame</label>
          <input
            id="username"
            type="text"
            value={enterUsername}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (in years)</label>
          <input
            id="age"
            type="number"
            value={enterAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
