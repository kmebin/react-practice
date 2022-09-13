import { useState } from "react";

const App = () => {
  const [toDo, setToDo] = useState("");
  const [toDoList, setToDoList] = useState([]);

  const onChange = (event) => {
    setToDo(event.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    if (toDo.length === 0) {
      return;
    }
    setToDoList((currentArray) => [toDo, ...currentArray]);
    setToDo("");
  };

  return (
    <div>
      <h1>My To Do List ({toDoList.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type='text' placeholder='Write yoru to do...' />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDoList.map((toDo, index) => (
          <li key={index}>{toDo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
