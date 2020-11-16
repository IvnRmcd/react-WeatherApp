import "./App.css";
import Layout from "../src/component/Layout/Layout";
import Weather from "./container/WeatherArea/Weather";

function App() {
  return (
    <div className="App">
      <Layout />
      <Weather />
    </div>
  );
}

export default App;
