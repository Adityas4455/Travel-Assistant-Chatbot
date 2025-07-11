from fastapi import APIRouter
from app.models.schemas import WeatherRequest, WeatherResponse
from app.services.weather_service import get_weather

router = APIRouter()

@router.post("/weather", response_model=WeatherResponse)
def get_weather_api(req: WeatherRequest):
    weather = get_weather(req.location)
    return WeatherResponse(weather=weather)
