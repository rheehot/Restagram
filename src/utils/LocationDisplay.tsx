import React from 'react';
import { useLocation } from 'react-router-dom';

const LocationDisplay = () => {
  const location = useLocation();

  return (
    <div
      style={{
        position: 'absolute',
        textIndent: '-9999px',
      }}
      data-testid="location-display"
    >
      {location.pathname}
    </div>
  );
};

export default LocationDisplay;
