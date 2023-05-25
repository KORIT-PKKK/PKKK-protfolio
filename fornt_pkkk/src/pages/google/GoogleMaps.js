import React, { useEffect, useState } from 'react';
import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';

const GoogleMaps = () => {
  const [currentPosition, setCurrentPosition] = useState({ lat: 37.5665, lng: 126.9780 });
  const [mapInstance, setMapInstance] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })

  

  const containerStyle = {
    width: '100%',
    height: '400px'
  };

  const myStyles = [
    {
      featureType: "poi",
      elementType: "labels",
      stylers: [{ visibility: "off" }],
    },
  ];


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
      options={{ disableDefaultUI: true, styles: myStyles }}
    >
    <MarkerF
      position={{ lat: 35.151063, lng: 129.058063 }}
      icon={{
        url: `/src/images.marker.png`,
        scaledSize: new window.google.maps.Size(32, 32),
      }}
    />
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