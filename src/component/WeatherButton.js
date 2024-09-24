import React from 'react';
import { Button } from 'react-bootstrap';

const weatherButton = ({ cities, selectedCity, handleCityChange }) => {
  console.log('cities?', cities);

  return (
    <div className="weatherBtn">
      {/* 현재 위치 버튼 */}
      <Button
        className="current-button"
        variant={`${selectedCity == null ? 'outline-secondary' : 'secondary'}`}
        onClick={() => handleCityChange('current')}
      >
        Current Location
      </Button>

      {cities.map((item, index) => (
        <Button
          className="city-button"
          variant={`${
            selectedCity === item ? 'outline-secondary' : 'secondary'
          }`}
          onClick={() => handleCityChange(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default weatherButton;
