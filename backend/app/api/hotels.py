from fastapi import APIRouter
from app.models.schemas import HotelSearchRequest, HotelSearchResponse
from app.services.hotel_service import get_hotels

router = APIRouter()

@router.post("/hotels", response_model=HotelSearchResponse)
def search_hotels(req: HotelSearchRequest):
    hotels = get_hotels(req.destination, req.checkin, req.checkout)
    return HotelSearchResponse(hotels=hotels)
