from pydantic import BaseModel

class DestinationRequest(BaseModel):
    interests: list[str]
    budget: float

class DestinationResponse(BaseModel):
    destinations: list[str]

class FlightSearchRequest(BaseModel):
    origin: str
    destination: str
    date: str

class FlightSearchResponse(BaseModel):
    flights: list[dict]

class HotelSearchRequest(BaseModel):
    destination: str
    checkin: str
    checkout: str

class HotelSearchResponse(BaseModel):
    hotels: list[dict]

class WeatherRequest(BaseModel):
    location: str

class WeatherResponse(BaseModel):
    weather: dict
