import React, { useEffect, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const GoogleMaps = () => {
  const [currentPosition, setCurrentPosition] = useState({ lat: 37.5665, lng: 126.9780 });

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })

  const containerStyle = {
    width: '100%',
    height: '400px'
  };


  const onLoad = (map) => {
  };

  const onUnmount = (map) => {
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setCurrentPosition({ lat: latitude, lng: longitude });
      });
    }
  }, []);


  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={currentPosition}
      zoom={17}
      onLoad={onLoad}
      onUnmount={onUnmount}

    >
    </GoogleMap >
  ) : <></>;
};

export default GoogleMaps;

// const [map, setMap] = React.useState(null);
// const [center, setCenter] = useState({ lat: 0, lng: 0 });

// const { isLoaded } = useJsApiLoader({
//   id: 'google-map-script',
//   googleMapsApiKey: ""
// });

// useEffect(() => {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         setCenter({
//           lat: position.coords.latitude,
//           lng: position.coords.longitude
//         });
//       },
//       (error) => {
//         console.error(error);
//       }
//     );
//   }
// }, []);

// const onLoad = React.useCallback(function callback(map) {
//   const bounds = new window.google.maps.LatLngBounds(center);
//   map.fitBounds(bounds);
//   setMap(map);
// }, [center]);

// const onUnmount = React.useCallback(function callback(map) {
//   setMap(null);
// }, []);