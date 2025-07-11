import React from "react";

function TravelTips() {
  const tips = [
    "Always check visa requirements before booking flights.",
    "Keep digital copies of important documents.",
    "Learn basic phrases of the local language.",
    "Use weather forecasts to pack accordingly.",
  ];
  return (
    <div>
      <h2>Travel Tips</h2>
      <ul>
        {tips.map((tip, idx) => <li key={idx}>{tip}</li>)}
      </ul>
    </div>
  );
}

export default TravelTips;
