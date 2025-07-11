from fastapi import APIRouter
from app.models.schemas import DestinationRequest, DestinationResponse

router = APIRouter()

@router.post("/destinations", response_model=DestinationResponse)
def recommend_destinations(req: DestinationRequest):
    # Simple logic, can use ML/model or external API
    recommended = ["Paris", "Tokyo", "New York"] if req.budget > 1000 else ["Bangkok", "Prague", "Istanbul"]
    return DestinationResponse(destinations=recommended)
