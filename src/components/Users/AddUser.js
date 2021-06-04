import React, { useState, useEffect } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUSer.module.css";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enterUsername, setEnterUsername] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const addUserHandler = (e) => {
    e.preventDefault();
    if (enterUsername.trim().length === 0 || enterAge.trim().length === 0) {
      return;
    }
    if (enterAge < 1) {
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

  // useEffect(() => {

  // });

  return (
    <>
      <ErrorModal title="An Error occured" message="something went wrong.." />
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
