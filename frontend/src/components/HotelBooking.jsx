import React, { useState } from "react";

function HotelBooking() {
  const [destination, setDestination] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [hotels, setHotels] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:8000/hotels", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ destination, checkin, checkout }),
    });
    const data = await response.json();
    setHotels(data.hotels);
  };

  return (
    <div>
      <h2>Book Hotels</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Destination" value={destination} onChange={e => setDestination(e.target.value)} />
        <input type="date" value={checkin} onChange={e => setCheckin(e.target.value)} />
        <input type="date" value={checkout} onChange={e => setCheckout(e.target.value)} />
        <button type="submit">Search Hotels</button>
      </form>
      <ul>
        {hotels.map((h, idx) => (
          <li key={idx}>{h.name} - ${h.price}/night ({h.rating}⭐ in {h.city})</li>
        ))}
      </ul>
    </div>
  );
}

export default HotelBooking;
