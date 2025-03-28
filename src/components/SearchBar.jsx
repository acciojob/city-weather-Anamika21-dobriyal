import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter a city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="search"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
