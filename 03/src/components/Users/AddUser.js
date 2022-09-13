import { useState } from "react";
import Button from "../common/Button";
import Card from "../common/Card";
import ErrorModal from "../common/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(undefined);

  const changeUsernameHandler = (event) => {
    setUsername(event.target.value);
  };
  const changeAgeHandler = (event) => {
    setAge(event.target.value);
  };
  const submitFormHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({ title: "Invalid input", content: "Please enter a valid name and age (non-empty values)." });
      return;
    }
    if (+age < 1) {
      setError({ title: "Invalid age", content: "Please enter a valid age (> 0)." });
      return;
    }
    props.onAddUser({ id: Math.random().toString(), name: username, age });
    setUsername("");
    setAge("");
  };
  const clickErrorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && <ErrorModal title={error.title} content={error.content} onClick={clickErrorHandler} />}
      <Card className={styles.input}>
        <form onSubmit={submitFormHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' value={username} onChange={changeUsernameHandler} />
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' value={age} onChange={changeAgeHandler} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
