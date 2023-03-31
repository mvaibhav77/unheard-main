import React, { useEffect, useState } from 'react'
import '../index.css'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import Geocode from "react-geocode";



function GoogleMapLocation({location}) {
    Geocode.setApiKey("AIzaSyAKBuV2c_FNXvAX34S5GnL7nfwHdMhBeNw");
    Geocode.setLanguage("en");
    Geocode.setRegion("in");

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyAKBuV2c_FNXvAX34S5GnL7nfwHdMhBeNw",
        libraries: ["places"],
    })

    const[latitude,setLatitude] = useState(28);
    const[longitude,setLongitude] = useState(78);
    


    // const successCallback = (position)=>{
    //     setLatitude(position.coords.latitude);
    //     setLongitude(position.coords.longitude);
    // }

    // if (navigator.geolocation) {
    //     navigator.geolocation.getCurrentPosition(successCallback);
    // }

    const changeCoords=(lat,lng)=>{
        setLatitude(lat);
        setLongitude(lng)
    }
    

    useEffect(()=>{
        const getCoord = async ()=>{
          if(location !== ''){
            Geocode.fromAddress(location).then(
              (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat,lng)
                changeCoords(lat,lng);
              },
              (error) => {
                console.error(error);
              }
            );
          }
        }
        getCoord();
    },[location])


    if(!isLoaded) return <div>Loading ...</div>

  return (
    <>
        <GoogleMap zoom={15} center={{lat:latitude,lng:longitude}} mapContainerClassName="map-container"
        >
            <Marker position={{lat:latitude,lng:longitude}} />
        </GoogleMap>
    </>

  )
}



export default GoogleMapLocation