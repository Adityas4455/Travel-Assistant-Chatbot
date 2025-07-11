from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.api import destinations, flights, hotels, weather

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(destinations.router)
app.include_router(flights.router)
app.include_router(hotels.router)
app.include_router(weather.router)
