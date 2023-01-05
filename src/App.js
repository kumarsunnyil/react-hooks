import { useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";


function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");
  return (
    <div className="App">
    <Search />      
    </div>
  );
}

export default App;
