import React, { useState } from "react";

function DestinationRecommendations() {
  const [interests, setInterests] = useState("");
  const [budget, setBudget] = useState("");
  const [destinations, setDestinations] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/destinations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ interests: interests.split(","), budget: parseFloat(budget) }),
    });
    const data = await response.json();
    setDestinations(data.destinations);
  };

  return (
    <div>
      <h2>Recommend Destinations</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Interests (comma separated)" value={interests} onChange={e => setInterests(e.target.value)} />
        <input type="number" placeholder="Budget" value={budget} onChange={e => setBudget(e.target.value)} />
        <button type="submit">Get Recommendations</button>
      </form>
      <ul>
        {destinations.map((d, idx) => <li key={idx}>{d}</li>)}
      </ul>
    </div>
  );
}

export default DestinationRecommendations;
