import {useSelector, useDispatch}  from 'react-redux';

import MapBlock from './MapBlock/MapBlock';
import WeatherBlock from './WeatherBlock/WeatherBlock';
import {getWeather} from '../../redux/actions';
import store from '../../redux/store';

import style from './main.module.scss';


const Main = () => {
    const weatherData = useSelector(state => state.weather.weather);
    const weather = weatherData.data;
    const tempDimension = useSelector(state => state.tempDimension.tempDimension);
    const userLocation = useSelector(state => state.location.userLocation);
    // const searchLocation = useSelector(state => state.location.searchLocation);

    const location = {
        city: weatherData.city_name,
        country: weatherData.country_code
    }

    const weatherLocation = location ? location : userLocation;

    console.log('weatherLocation Main', weatherLocation)
    console.log('weather', weather)

    return (
        <div className = {style.main}>
            {weatherLocation && weather &&
                <>
                    <WeatherBlock 
                        weather = {weather}  
                        location = {weatherLocation} 
                        tempDimension = {tempDimension}
                    />
                    <MapBlock />
                </>
            }
        </div>
    )
}

export default  Main;