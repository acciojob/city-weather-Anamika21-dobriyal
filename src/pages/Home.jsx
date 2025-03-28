import { useState } from "react";
import SearchBar from "../components/SearchBar";
import WeatherCard from "../components/WeatherCard";
import { fetchWeather } from "../services/weatherApi";

const Home = () => {
  const [weather, setWeather] = useState(null);

  const handleSearch = async (city) => {
    const data = await fetchWeather(city);
    setWeather(data);
  };

  return (
    <div className="home">
      <h1>City Weather</h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherCard weather={weather} />
    </div>
  );
};

export default Home;
