import { useSelector } from "react-redux";
import { format } from 'date-fns'

const Favorite = () => {

    const { addFavorite: {favorites} } = useSelector(state => state)
    console.log('i am the data ', favorites)

  return (
    <div className="containerMod">
        {
            favorites && favorites.map(data => (
                <div className="weather-side ml-3">
                <div className="weather-gradient" />
                <div className="date-container">
                  <h2 className="date-dayname">{format(new Date(data.timezone * 24), 'iii')}</h2>
                  <span className="date-day">{format(new Date(data.timezone / 365), 'dd MMM yyyy')}</span>
                  <i className="location-icon" data-feather="map-pin" />
                  <span className="location">{data.name}, {data.sys.country}</span>
                  <div className="precipitation mt-2">
                      {" "}
                      <span className="title">PRECIPITATION</span>
                      <span className="value">{data.wind.deg} %</span>
                      <div className="clear" />
                    </div>
                    <div className="humidity">
                      {" "}
                      <span className="title">HUMIDITY</span>
                      <span className="value">{data.main.humidity} %</span>
                      <div className="clear" />
                    </div>
                    <div className="wind">
                      {" "}
                      <span className="title">WIND</span>
                      <span className="value">{data.wind.speed} km/h</span>
                      <div className="clear" />
                    </div>
                </div>
                {/* <div className="wind mt-2">
                      {" "}
                      <span className="title">SUN RISE</span>
                      <span className="value">{format(new Date(data.sys.sunrise), "hh:mm aa")}</span>
                      <div className="clear" />
                    </div>
                    <div className="wind">
                      {" "}
                      <span className="title">SUNSET</span>
                      <span className="value">{format(new Date(data.sys.sunset), "hh:mm aa")}</span>
                      <div className="clear" />
                    </div> */}
                <div className="weather-container">
                  <i className="weather-icon" data-feather="sun" />
                  <h1 className="weather-temp">{Math.round(data.main.temp - 273.15)}°C</h1>
                  <h3 className="weather-desc">{data.weather.map(w => w.main)}</h3>
                </div>
              </div>
            ))
        }
    </div>
  );
};


export default Favorite
