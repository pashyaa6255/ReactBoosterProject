import { useState } from "react";
import "./styles.css";

export default function App() {
  const api = `https://randomuser.me/api`;

  const [user, setUser] = useState("Nothing Inside, Its Empty Here");

  const addUserHandler = async () => {
    const userData = await fetch(api, {
      method: "GET"
    });
    const userJson = await userData.json();
    console.log(userJson);
    setUser(userJson.results[0].gender);
  };
  return (
    <div>
      <button onClick={addUserHandler}>ADD User</button>
      <div>{user}</div>
      <input></input>
    </div>
  );
}
