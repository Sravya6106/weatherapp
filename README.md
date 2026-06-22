# 🌦️ Weather Pro App

A responsive, real-time weather application built with HTML, CSS, and JavaScript. Get instant weather information for any city in the world using the OpenWeatherMap API.

## Features

✨ **Real-time Weather Data**
- Current temperature and "feels like" temperature
- Weather condition (Clear, Cloudy, Rainy, etc.)
- Humidity percentage
- Wind speed
- Atmospheric pressure
- Visibility distance

🎨 **Dynamic Background**
- Background changes based on weather conditions
- Beautiful gradient overlays for visual appeal
- Responsive design for all devices

🔍 **Easy Search**
- Simple search by city name
- Instant results
- Error handling for invalid cities

## Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling with gradients and responsive design
- **JavaScript (ES6+)** - Async/await for API calls
- **OpenWeatherMap API** - Real-time weather data

## Getting Started

### Prerequisites
- A web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for API calls)

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/weatherapp.git
cd weatherapp
```

2. Open the application
- Simply open `index.html` in your web browser
- Or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (with http-server package)
npx http-server
```

## Usage

1. Enter a city name in the search box
2. Click the "Search" button or press Enter
3. View the current weather information for that city

### Example
- Search for "London" to see weather in London, UK
- Search for "New York" for weather in New York, USA
- Works with any city name worldwide

## API Information

This app uses the **OpenWeatherMap API** (Free Tier)

- Base URL: `https://api.openweathermap.org/data/2.5/weather`
- API Key: Required (get yours at [openweathermap.org](https://openweathermap.org/api))
- Units: Metric (Celsius, m/s)

## File Structure

```
weatherapp/
├── index.html      # Main HTML structure
├── style.css       # Styling and responsive design
├── script.js       # JavaScript logic and API calls
└── README.md       # Project documentation
```

## Features in Detail

### Search Functionality
- Validates user input before making API calls
- Shows loading state during API request
- Handles errors gracefully (invalid city, network errors)

### Weather Display
Shows the following information:
- City name and country code
- Temperature (°C)
- Weather description
- Humidity (%)
- Wind speed (m/s)
- Atmospheric pressure (hPa)
- Visibility (km)
- Feels like temperature (°C)

### Dynamic Styling
Background changes based on weather conditions:
- ☀️ Clear/Hot weather
- ☁️ Cloudy weather
- 🌧️ Rainy weather
- ❄️ Snowy weather
- And more...

## Future Enhancements

- [ ] Add forecast data (5-day, hourly)
- [ ] Save favorite cities
- [ ] Geolocation support
- [ ] Dark/Light theme toggle
- [ ] Weather alerts
- [ ] Mobile app version
- [ ] Multiple language support
- [ ] Temperature unit conversion (°C/°F)

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Deployment

The app can be deployed to:
- **GitHub Pages** (Recommended for free hosting)
- **Netlify**
- **Vercel**
- **Firebase Hosting**
- Any static web hosting service

### Deploy to GitHub Pages

1. Push your code to GitHub
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to your repository settings
3. Navigate to "Pages" section
4. Select main branch as source
5. Your app will be live at `https://yourusername.github.io/weatherapp`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Troubleshooting

**Issue: "City not found" error**
- Check spelling of city name
- Ensure you have an internet connection

**Issue: "Invalid API key" error**
- Verify your OpenWeatherMap API key is correct
- Replace the API key in `script.js` with your own

**Issue: No background image loading**
- Check internet connection
- Verify Unsplash image URLs are accessible

## Contact & Support

For questions or support, please open an issue on GitHub.

---

**Made with ❤️ by [Your Name]**

Happy weather checking! 🌤️
