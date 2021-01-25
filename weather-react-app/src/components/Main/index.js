import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import MapBlock from './MapBlock';
import WeatherBlock from './WeatherBlock';

import style from './main.module.scss';


const Main = () => {
    const weatherData = useSelector(state => state.weather.weather);
    const weather = weatherData.data;
    // const tempDimension = useSelector(state => state.tempDimension.tempDimension);
    const tempDimension = useSelector(state => state.serviceStates.tempDimension);
    const userLocation = useSelector(state => state.location.userLocation);
    const history = useHistory();

    const location = {
        city: weatherData.city_name,
        country: weatherData.country_code
    }

    const weatherLocation = location ? location : userLocation;
  
    useEffect(() => {
        weatherLocation.city ? 
        history.push(`city=${weatherLocation.city.toLowerCase()}&temp_dim=${tempDimension.toLowerCase()}`) 
        : history.push('/');
    }, [weatherData])

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