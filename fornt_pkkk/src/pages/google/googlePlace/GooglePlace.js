import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Place = () => {
    const [places, setPlaces] = useState([]);

    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            const radius = 1000; // 반경 1km
            const types = 'restaurant|cafe|bar'; // 가져올 장소 타입
            const apiKey = 'apiKey'; // 구S글 Places API 키
            
            const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=${radius}&types=${types}&key=${apiKey}`;
  
            axios.get(apiUrl)
              .then(response => {
                setPlaces(response.data.results);
              })
              .catch(error => {
                console.error(error);
              });
          },
          (error) => {
            console.error(error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    }, []);
  
    return (
      <div>
        <h2>My Nearby Places</h2>
        <ul>
          {places.map(place => (
            <li key={place.id}>
              <h3>{place.name}</h3>
              <p>{place.vicinity}</p>
              <p>Rating: {place.rating || '-'}</p>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Place;