/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import MapBlock from './MapBlock';
import WeatherBlock from './WeatherBlock';

import styles from './main.module.scss';

const Main = () => {
    const weatherData = useSelector(state => state.weather.weather);
    const weather = weatherData.data;
    const tempDimension = useSelector(state => state.serviceStates.tempDimension);
    const userLocation = useSelector(state => state.location.userLocation);
    const history = useHistory();
    const urlLocation = useLocation();

    const location = {
        city: weatherData.city_name,
        country: weatherData.country_code
    }

    const weatherLocation = location ? location : userLocation;
  
    useEffect(() => {
        if(weatherLocation.city) {
            const prevPath = urlLocation.pathname.slice(1);
            const nextPath = `city=${weatherLocation.city.toLowerCase()}&temp_dim=${tempDimension.toLowerCase()}`;

            if (prevPath !== nextPath) {
                history.push(nextPath)
            }
        }
    }, [weatherData])

    return (
        <div className={styles.main}>
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