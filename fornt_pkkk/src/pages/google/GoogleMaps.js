import React, { useEffect, useState } from 'react';
import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import * as S from './styles/GoogleMapsStyle';
import { useNavigate } from 'react-router-dom';
/** @jsxImportSource @emotion/react */


const GoogleMaps = () => {
  const [currentPosition, setCurrentPosition] = useState({ lat: 37.5665, lng: 126.9780 });
  const [selectedMarker, setSelectedMarker] = useState(null);
  const navigate = useNavigate();

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })

  const containerStyle = {
    width: '100%',
    height: '500px'
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

  const clickPlace = () => {
    navigate('/postAddView', { state: { locId: selectedMarker.locId } });
  }

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
          url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          scaledSize: new window.google.maps.Size(32, 32),
        }}
        onClick={(e) => {
          setSelectedMarker({ lat: 35.151063, lng: 129.058063, title: "Marker 1" });
        }}
        title="Marker 1"
      />
      <MarkerF
        position={{ lat: 35.153688, lng: 129.055563 }}
        icon={{
          url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
          scaledSize: new window.google.maps.Size(32, 32),
        }}
        onClick={(e) => {
          setSelectedMarker({ lat: 35.153688, lng: 129.055563, title: "Marker 2" });
        }}
      />
      {selectedMarker && (
        <InfoWindowF
          position={selectedMarker}
          options={{ pixelOffset: new window.google.maps.Size(0, -25) }}
          onCloseClick={() => {
            setSelectedMarker(null);
          }}
        >
          <div onClick={clickPlace} css={S.placeInfo}>
            <h1>{selectedMarker.title}</h1>
          </div>
        </InfoWindowF>
      )}
    </GoogleMap>
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