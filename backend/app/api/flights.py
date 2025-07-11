from fastapi import APIRouter
from app.models.schemas import FlightSearchRequest, FlightSearchResponse
from app.services.flight_service import get_flights

router = APIRouter()

@router.post("/flights", response_model=FlightSearchResponse)
def search_flights(req: FlightSearchRequest):
    flights = get_flights(req.origin, req.destination, req.date)
    return FlightSearchResponse(flights=flights)
