import { useRef, useState } from "react";
import Button from "../common/Button";
import Card from "../common/Card";
import ErrorModal from "../common/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState(undefined);

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({ title: "Invalid input", content: "Please enter a valid name and age (non-empty values)." });
      return;
    }
    if (+enteredAge < 1) {
      setError({ title: "Invalid age", content: "Please enter a valid age (> 0)." });
      return;
    }
    props.onAddUser({ id: Math.random().toString(), name: enteredName, age: enteredAge });
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const clickErrorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && <ErrorModal title={error.title} content={error.content} onClick={clickErrorHandler} />}
      <Card className={styles.input}>
        <form onSubmit={submitFormHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' ref={nameInputRef} />
          <label htmlFor='age'>Age (Years)</label>
          <input id='age' type='number' ref={ageInputRef} />
          <Button type='submit'>Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
