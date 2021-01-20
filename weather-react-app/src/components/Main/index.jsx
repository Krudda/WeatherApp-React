import { useSelector, useDispatch } from 'react-redux';

import MapBlock from './MapBlock/MapBlock.jsx';
import WeatherBlock from './WeatherBlock/WeatherBlock.jsx';

import style from './main.module.scss';


const Main = () => {
    const weatherData = useSelector(state => state.weather.weather);
    const weather = weatherData.data;
    const tempDimension = useSelector(state => state.tempDimension.tempDimension);
    const userLocation = useSelector(state => state.location.userLocation);

    // console.log("Я Main,  погоду передаю ", weather);

    const location = {
        city: weatherData.city_name,
        country: weatherData.country_code
    }

    const weatherLocation = location ? location : userLocation;

    console.log('Я Main, location = ', weatherLocation)

    return (
        <div className={style.main}>
            {weatherLocation && weather &&
                <>
                    <WeatherBlock
                        weather={weather}
                        location={weatherLocation}
                        tempDimension={tempDimension}
                    />
                    <MapBlock />
                </>
            }
        </div>
    )
}

export default Main;