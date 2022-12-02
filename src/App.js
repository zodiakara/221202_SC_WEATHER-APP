import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavComponent from "./components/NavComponent";
import GetWeather from "./components/GetWeather";

function App() {
  return (
    <div className="App">
      <NavComponent />
      <GetWeather />
    </div>
  );
}

export default App;
