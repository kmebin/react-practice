import { useState } from "react";
import Button from "../common/Button";
import Card from "../common/Card";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      return;
    }
    if (+age < 1) {
      return;
    }
    props.onAddUser({ id: Math.random().toString(), name: username, age });
    setUsername("");
    setAge("");
  };
  const changeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const changeAgeHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={submitHandler}>
        <label htmlFor='username'>Username</label>
        <input id='username' type='text' value={username} onChange={changeUsernameHandler} />
        <label htmlFor='age'>Age (Years)</label>
        <input id='age' type='number' value={age} onChange={changeAgeHandler} />
        <Button type='submit'>Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
