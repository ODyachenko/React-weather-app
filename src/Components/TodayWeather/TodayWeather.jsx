import './styles.css';

function TodayWeather({ weather }) {
  return (
    <div className="today-weather">
      <h1 className="today-weather__temp">{Math.floor(weather.main.temp)}</h1>
      <span className="today-weather__prop">
        {weather.weather[0].description} {Math.floor(weather.main.temp)} /{' '}
        {Math.floor(weather.main.feels_like)}
      </span>
      <img
        className="today-weather__icon"
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
        alt="Weather icon"
      />
    </div>
  );
}

export default TodayWeather;
