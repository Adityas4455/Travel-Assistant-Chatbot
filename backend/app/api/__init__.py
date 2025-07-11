# backend/app/api/__init__.py
from .destinations import router as destinations_router
from .flights import router as flights_router
from .hotels import router as hotels_router
from .weather import router as weather_router

__all__ = [
    "destinations_router",
    "flights_router",
    "hotels_router",
    "weather_router"
]
