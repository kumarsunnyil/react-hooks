import { useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Profile from "./components/Profile/Profile";
import {LoginContext} from './Context/LoginContext'

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  return (
    <div className="App">
    <LoginContext.Provider value={{username, setUsername, showProfile, setShowProfile}}>
      {
        showProfile? <Profile /> : <Login />
      }
      </LoginContext.Provider>
    </div>
  );
}

export default App;
