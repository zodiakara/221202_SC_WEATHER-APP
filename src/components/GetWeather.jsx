import { useState } from "react";
import { Form } from "react-bootstrap";

const GetWeather = () => {
  const apiKey = "4c5e2d1e72b969caaf619ce5d0ff7e70";

  const [query, setQuery] = useState("london");
  const [city, setCity] = useState([]);

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}`;

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(apiUrl);

      if (response.ok) {
        let data = await response.json();
        console.log(data);
        setCity(data);
      } else {
        console.log("error fetching data");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          type="search"
          value={query}
          onChange={handleChange}
          placeholder="type your city here ..."
        />
      </Form>
    </div>
  );
};

export default GetWeather;
