import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherBox from './component/WeatherBox';
import WeatherButton from './component/WeatherButton';
import ClipLoader from 'react-spinners/ClipLoader';

// 1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다
// 2. 도시, 섭씨, 화씨, 날씨 상태 정보가 보인다
// 3. 5개의 버튼(현재 위치 1개, 다른 도시 4개)
// 4. 도시 버튼 클릭할 때마다 도시별 날씨가 보임
// 5. 현재 위치 기반 날씨 버튼을 클릭하면 다시 현재 위치 기반으로 돌아옴
// 6. 데이터를 들고 오는 동안 로딩 스피너가 돈다
function App() {
  const [weather, setWeather] = useState(null);
  const cities = ['jeju', 'tokyo', 'seoul'];
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  //앱이 실행되자마자 날씨 보임
  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };
  const getWeatherByCurrentLocation = async (lat, lon) => {
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=2d1bdbf7fa356db5d77ab48eeccda292&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  const getWeatherByCity = async () => {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2d1bdbf7fa356db5d77ab48eeccda292&units=metric`;
    setLoading(true);
    let response = await fetch(url);
    let data = await response.json();
    setWeather(data);
    setLoading(false);
  };

  useEffect(() => {
    if (city == '') {
      getCurrentLocation();
    } else {
      getWeatherByCity();
    }
  }, [city]);

  const handleCityChange = (city) => {
    if (city === 'current') {
      setCity(null);
    } else {
      setCity(city);
    }
  };

  return (
    <div>
      {loading ? (
        <div className="container">
          <ClipLoader color="f88c6b" loading={loading} size={150} />
        </div>
      ) : (
        <div className="container">
          <WeatherBox weather={weather} />
          <WeatherButton cities={cities} setCity={setCity} />
        </div>
      )}
      <WeatherButton
        cities={cities}
        handleCityChange={handleCityChange}
        selectedCity={city}
      />
    </div>
  );
}

export default App;
