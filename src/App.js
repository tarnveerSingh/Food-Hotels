import React, { useState, useEffect } from "react";

import { CssBaseline, Grid } from "@material-ui/core";

import { getPlacesData } from "./api2";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import Map from "./components/Map/Map";

//Bounds are more important in fetching the data for restaurants
//we use getPlacesData after we're done with the coordinates
//then we pass the value in for fetching restaurants in getPlacesData

const App = () => {
  const [places, setPlaces] = useState([]);
  const [childClicked, setChildClicked] = useState(null);

  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});
  // lat:0, lng:0 is default value in MAP
  // But if we want to get the user location we have useEffect
  //Also, remember useEffect is a callback function

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        setCoordinates({ lat: latitude, lng: longitude });
      }
    );
  }, []);

  //Deleted useCallBack() Function
  useEffect(() => {
    // getPlacesData(bounds.sw,bounds.ne).then((data) => {
    getPlacesData(bounds.sw, bounds.ne).then((data) => {
      console.log("Data", data);
      setPlaces(data);
    });
  }, []);
  //[coordinates, bounds]

  //here we have to mention {coordinates, bounds} dependencies for whenever the
  // the user clicks on the map and the coordinates will get updated

  // These all Grid and and CssBaseline is from material-ui

  return (
    <>
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: "100%" }}>
        <Grid item xs={12} md={4}>
          <List places={places} childClicked={childClicked} />
        </Grid>
        <Grid item xs={12} md={8}>
          <Map
            setCoordinates={setCoordinates}
            setBounds={setBounds}
            coordinates={coordinates}
            places={places}
            setChildClicked={setChildClicked}
          />
        </Grid>
      </Grid>
    </>
  );
};

// const callBack = useCallback(() => {

//     getPlacesData(bounds.sw, bounds.ne).then((data)=> {
//         console.log(data)
//         setPlaces(data);
//     });
// })

//We need the bounds in getPlacesData
// useEffect(() => {
//     callBack();
// });

export default App;

// const callBack = useCallback(() => {

//     getPlacesData(bounds.sw, bounds.ne).then((data)=> {
//         console.log(data)
//         setPlaces(data);
//     });
// })

//We need the bounds in getPlacesData
// useEffect(() => {
//     callBack();
// });
