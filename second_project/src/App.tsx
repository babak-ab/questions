import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  const [user, setUser] = useState(0);

  useEffect(() => {
    console.log("Hello123")
  setUser(user+1)
  }, [user]);
  function handle(){
    console.log("Hello1")
    setUser(user+1)
  }
    return (
    <>
      {/* <Navbar /> */}
      <button onClick={handle}>
        Click Me
      </button>
    </>
  );
}

export default App;
