import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUSer.module.css";

const AddUser = (props) => {
  const [enterUsername, setEnterUsername] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const addUserHandler = (e) => {
    e.preventDefault();
    console.log(enterUsername, enterAge);
    setEnterUsername("");
    setEnterAge("");
  };
  const userNameChangeHandler = (e) => {
    setEnterUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnterAge(e.target.value);
  };

  return (
    <>
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
