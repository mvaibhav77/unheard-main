import { createContext, useEffect, useState } from "react";
import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyAKBuV2c_FNXvAX34S5GnL7nfwHdMhBeNw");
Geocode.setLanguage("en");
Geocode.setRegion("in");

const LocationContext  = createContext();

const ContextProvider = ({children})=>{
    const [lat, setLat] = useState(28);
    const [lng, setLng] = useState(78);
    const [city, setCity] = useState('');

    useEffect(()=>{
        const successCallback = async (position)=>{
            const coords = await position.coords;
            setLat(coords.latitude);
            setLng(coords.longitude);
            console.log(lat,lng)
            getCityName(lat,lng);
        }
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successCallback);
        }
    },[lat,lng])


    const getCityName = async(lat,lng)=>{
        Geocode.fromLatLng(`${lat}`,`${lng}`).then(
            (response) => {
              const cityRes = response.results[0].address_components[3].long_name;
              setCity(cityRes);
              console.log(cityRes)
            },
            (error) => {
              console.error(error);
            }
          );
    }



    return (
        <LocationContext.Provider value={{
            city 
        }}>
            {children}
        </LocationContext.Provider>
    )
}

export {ContextProvider, LocationContext} 