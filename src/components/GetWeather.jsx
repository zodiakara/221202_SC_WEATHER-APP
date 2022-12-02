import { useState } from "react";
import { Form } from "react-bootstrap";
import { WiThermometerExterior } from "react-icons/wi";
import { WiBarometer } from "react-icons/wi";

const GetWeather = () => {
  const apiKey = "4c5e2d1e72b969caaf619ce5d0ff7e70";

  const [query, setQuery] = useState("london");
  const [city, setCity] = useState({ city: "london" });

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`;

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(apiUrl);

      if (response.ok) {
        let city = await response.json();
        console.log(city);
        setCity(city);
      } else {
        console.log("error fetching data");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="m-3 d-flex justify-content-center">
      <div className="justify-content-center">
        <Form onSubmit={handleSubmit}>
          <Form.Control
            type="search"
            value={query}
            onChange={handleChange}
            placeholder="type your city here ..."
          />
        </Form>
        <div>
          <h2 className="m-3">weather in {city.name} today is ...</h2>
          <div className="d-flex justify-content-center">
            <h5>temperature</h5>
            <p>
              <WiThermometerExterior />
              {city.main.temp}
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <h5>air pressure</h5>
            <p>
              <WiBarometer />
              {city.main.pressure}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetWeather;
