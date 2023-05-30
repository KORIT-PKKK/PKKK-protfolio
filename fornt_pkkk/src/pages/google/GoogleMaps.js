/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import * as S from './styles/GoogleMapsStyle';
import { useNavigate } from 'react-router-dom';
import { BsArrowLeftShort } from 'react-icons/bs';
import { useQuery } from 'react-query';
import { localURL } from '../../config/ApiURL';
import Cookies from 'js-cookie';
import axios from 'axios';


const GoogleMaps = () => {
  const [currentPosition, setCurrentPosition] = useState({ lat: 37.5665, lng: 126.9780 });
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [locationList, setLocationList] = useState([]);
  const navigate = useNavigate();


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GCP_AUTH_KEY
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

  const backClickHandle = () => {
    navigate("/");
  }

  const searchLocationList = useQuery(["searchLocationList"], async () => {


    const userId = Cookies.get("userId");
    const response = await axios.get(`${localURL}/api/loc/list`, { params: { userId: userId } })
    return response;
  }, {
    onSuccess: (response) => {
      setLocationList(response.data)
    }
  });

  if (searchLocationList.isLoading) {
    return <div>불러오는 중...</div>
  }

  return isLoaded ? (
    <>
      <button css={S.whiteCancelButton} onClick={backClickHandle}><BsArrowLeftShort css={S.backButton} />글쓰기 취소</button>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={currentPosition}
        zoom={17}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{ disableDefaultUI: true, styles: myStyles }}
      >
        {locationList.map(location => (
          <MarkerF
            position={{ lat: location.lat, lng: location.lng }}
            icon={{
              url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
              scaledSize: new window.google.maps.Size(32, 32),
            }}
            onClick={(e) => {
              setSelectedMarker({ lat: location.lat, lng: location.lng, title: location.locName, locId: location.locId });
            }}
            title={location.locName} />
        ))}
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
    </>
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