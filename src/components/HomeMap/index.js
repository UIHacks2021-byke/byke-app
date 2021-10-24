import React, { useState, useEffect } from "react";
import { Image } from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps';
// import {API, graphqlOperation} from 'aws-amplify';
// import { listCars } from '../../graphql/queries';

import bikes from '../../assets/data/bikes';

const HomeMap = (props) => {
  const [bikes, setBikes] = useState([]);

  // useEffect(() => {
  //   const fetchCars = async () => {
  //     try {
  //       const response = await API.graphql(
  //         graphqlOperation(
  //           listCars
  //         )
  //       )

  //       setCars(response.data.listCars.items);
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };

  //   fetchCars();
  // }, [])

  const getImage = (type) => {
    if (type === 'Raleigh') {
      return require('../../assets/images/Raleigh.png');
    }
    if (type === 'Schwinn') {
      return require('../../assets/images/Raleigh.png');
    }
    return require('../../assets/images/Raleigh.png');
  };

  return (
    <MapView
      style={{width: '100%', height: 350}}
      provider={PROVIDER_GOOGLE}
      showsUserLocation={true}
      initialRegion={{
        latitude: 7.443511663182365,
        longitude: 3.9002676950325896,
        latitudeDelta: 0.004,
        longitudeDelta: 0.004,
      }}>
      {bikes.map((car) => (
        <Marker
          key={bike.id}
          coordinate={{latitude: bike.latitude, longitude: bike.longitude}}
        >
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
              transform: [{
                rotate: `${bike.heading}deg`
              }]
            }}
            source={getImage(bike.type)}
          />
        </Marker>
      ))}
    </MapView>
  );
};

export default HomeMap;

