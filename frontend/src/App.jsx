import "./App.css";
import HeaderPage from "./components/HeaderPage";
import SliderVertical from "./components/SliderVertical";

function App() {
  return (
    <div className="App">
      <HeaderPage page="01" totalPages="05" title="DEFINE YOUR HAIR TYPE" />
      <SliderVertical />
    </div>
  );
}

export default App;
