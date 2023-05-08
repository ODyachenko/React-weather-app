import { useEffect, useState } from 'react';

import Location from './Components/Location/Location';
import TodayWeather from './Components/TodayWeather/TodayWeather';

function App() {
  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState('Kyiv');
  const API_KEY = '5a14e9e6b62354668bad1db223e59ba5';

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => setWeather(json))
      .catch((error) => console.error('Can not GET the data:', error));
  }, [location]);

  return (
    <div className={`App ${!weather.main && 'error'}`}>
      <Location location={location} setLocation={setLocation} />
      {weather.main ? (
        <TodayWeather weather={weather} />
      ) : (
        <h2 className="error-message">Unable to find city or town</h2>
      )}
    </div>
  );
}

export default App;
