import requests

OPENWEATHER_API_KEY = "YOUR_OPENWEATHER_API_KEY"

def get_weather(location: str):
    url = f"http://api.openweathermap.org/data/2.5/weather?q={location}&appid={OPENWEATHER_API_KEY}&units=metric"
    response = requests.get(url)
    data = response.json()
    return {
        "temp": data["main"]["temp"],
        "desc": data["weather"][0]["description"],
        "icon": data["weather"][0]["icon"],
        "city": data["name"]
    }
