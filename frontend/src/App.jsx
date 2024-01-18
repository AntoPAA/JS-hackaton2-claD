import { Outlet } from "react-router-dom";

import "./App.css";

import NavigationButtons from "./components/NavigationButtons";

function App() {
  return (
    <div className="App">
      <Outlet />
      <NavigationButtons />
    </div>
  );
}

export default App;
