import { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUserHandler = (newUser) => {
    setUsers((prev) => [newUser, ...prev]);
  };

  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      {users.length !== 0 && <UserList users={users} />}
    </>
  );
};

export default App;
