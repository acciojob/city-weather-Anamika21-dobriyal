const WeatherCard = ({ weather }) => {
    if (!weather) return null;
  
    return (
      <div className="weather">
        <h2>{weather.name}, {weather.sys.country}</h2>
        <h3>{weather.main.temp}°C</h3>
        <p>{weather.weather[0].description}</p>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].description}
        />
      </div>
    );
  };
  
  export default WeatherCard;
  