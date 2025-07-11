import React, { useState } from "react";

function FlightBooking() {
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");
  const [flights, setFlights] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/flights", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ origin, destination, date }),
    });
    const data = await response.json();
    setFlights(data.flights);
  };

  return (
    <div>
      <h2>Book Flights</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Origin" value={origin} onChange={e => setOrigin(e.target.value)} />
        <input type="text" placeholder="Destination" value={destination} onChange={e => setDestination(e.target.value)} />
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
        <button type="submit">Search Flights</button>
      </form>
      <ul>
        {flights.map((f, idx) => (
          <li key={idx}>{f.airline} {f.flight_number} - ${f.price} ({f.origin} to {f.destination} on {f.departure})</li>
        ))}
      </ul>
    </div>
  );
}

export default FlightBooking;
