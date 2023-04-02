import React from "react";
import {Routes, Route, BrowserRouter as Router
  } from "react-router-dom";
  import LandingPage from "./component1/LandingPage";
  import ChatHealth from "./component1/ChatHealth";
  import VIDEOCALL from "./component1/VIDEOCALL";
  import NgoSearch from "./component1/NgoSearch";
  import NgoSearch1 from "./component1/NgoSearch1";
  import NgoSearchSpare from "./component1/NgoSearchSpare";
  import NgoSearchSpare1 from "./component1/NgoSearchSpare1";
  import ABOUTUS from "./component1/ABOUTUS";
  import NgoDetails from "./component1/NgoDetails";
  import DoctorsInfo from "./component1/DoctorsInfo";
  import DoctorsSearchDetails from "./component1/DoctorSearchDetails";
  import DoctorsSearchDetails1 from "./component1/DoctorSearchDetails1";
  import FindYourDoctor from "./component1/FindYourDoctor";
  import FindYourDoctor1 from "./component1/FindYourDoctor1";
  import ChatPageNgo from "./pages/ChatPageNgo";
  import { ContextProvider as DocContextProvider } from "./context/DoctorsContext";
  import { ContextProvider as NGOContextProvider } from "./context/NGOContext";
  import { ContextProvider as LocationProvider } from "./context/LocationContext";

  function App() {
  
    return (
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/chat-interface1" element={<ChatHealth />} />
          <Route path="/chat-interface" element={<ChatPageNgo />} />
          <Route path="/video-call" element={<VIDEOCALL />} />
          <Route path="/ngo-search1" element={
            <NGOContextProvider>
                <LocationProvider>
                  <NgoSearch />  
                </LocationProvider>
            </NGOContextProvider>
          } />
          <Route path="/ngo-search" element={
              <NGOContextProvider>
                <LocationProvider>
                  <NgoSearch1 />  
                </LocationProvider>
              </NGOContextProvider>
          } />
          <Route path="/ngo-search-spare1" element={
            <NGOContextProvider>
              <LocationProvider>
                <NgoSearchSpare />
              </LocationProvider>
            </NGOContextProvider>
          } />
          <Route path="/ngo-search-spare" element={
              <NGOContextProvider> 
                <NgoSearchSpare1 />
            </NGOContextProvider>
          } />
          <Route path="/about-us" element={<ABOUTUS />} />
          <Route path="/ngo-details" element={
            <NGOContextProvider>
              <NgoDetails />
            </NGOContextProvider>
          } />
          <Route path="/doctors-info" element={
                <DocContextProvider>
                  <DoctorsInfo />
                </DocContextProvider>    
          } />
          <Route
            path="/doctors-search-details1"
            element={
              <DocContextProvider>
                <LocationProvider>
                  <DoctorsSearchDetails />
                </LocationProvider>
              </DocContextProvider>
              }
          />
          <Route
            path="/doctors-search-details"
            element={
              <DocContextProvider>
                <LocationProvider>
                  <DoctorsSearchDetails1 />
                </LocationProvider>
              </DocContextProvider>
          }
          />
          <Route path="/find-your-doctor1" element={
              <DocContextProvider>
                <LocationProvider>
                  <FindYourDoctor />
                </LocationProvider>
              </DocContextProvider>

          } />
          <Route path="/find-your-doctor" element={
              <DocContextProvider>
                <LocationProvider>
                  <FindYourDoctor1 />
                </LocationProvider>
            </DocContextProvider>
          } />
        </Routes>
      </Router>
      
    );
  }
  export default App;
  