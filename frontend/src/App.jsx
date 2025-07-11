import React from "react";
import DestinationRecommendations from "./components/DestinationRecommendations";
import FlightBooking from "./components/FlightBooking";
import HotelBooking from "./components/HotelBooking";
import WeatherInfo from "./components/WeatherInfo";
import TravelTips from "./components/TravelTips";
import QuestionAnswer from "./components/QuestionAnswer";

function App() {
  return (
    <div>
      <h1>Travel Assistant</h1>
      <DestinationRecommendations />
      <FlightBooking />
      <HotelBooking />
      <WeatherInfo />
      <TravelTips />
      <QuestionAnswer />
    </div>
  );
}
export default App;
