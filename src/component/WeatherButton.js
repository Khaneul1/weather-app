import React from 'react';
import { Button } from 'react-bootstrap';

const weatherButton = ({ cities, selectedCity, handleCityChange }) => {
  console.log('cities?', cities);

  return (
    <div>
      <Button
        variant={`${selectedCity == null ? 'outline-warning' : 'warning'}`}
        onClick={() => handleCityChange('current')}
      >
        Current Location
      </Button>

      {cities.map((item, index) => (
        <Button
          variant={`${selectedCity == city ? 'outline-warning' : 'warning'}`}
          onClick={() => handleCityChange(city)}
        >
          {city}
        </Button>
      ))}
    </div>
  );
};

export default weatherButton;
