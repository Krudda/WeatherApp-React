import { useSelector } from 'react-redux';

import WeatherBlockHeader from './WeatherBlockHeader/WeatherBlockHeader';
import WeatherBlockBody from './WeatherBlockBody/WeatherBlockBody';
import WeatherBlockFooter from './WeatherBlockFooter/WeatherBlockFooter';

import styles from './weather.module.scss';
import Spinner from '../../common/Spinner';

const WeatherBlock = ({ weather, location, tempDimension }) => {

    // console.log('Рисую WeatherBlock, weather = ', weather)
    // console.log('Рисую WeatherBlock, location = ', location)

    const loading = useSelector(state => state.loading.loading);
    const threeDaysWeather = weather.slice(1, 4);

    loading ? console.log('Рисую Spinner') : console.log('Рисую WeatherBlock, location = ', location);

    return (
        <div className={styles.weatherBlock}>
            { loading ?
                <Spinner /> :
                <>
                    <WeatherBlockHeader location={location} />
                    <WeatherBlockBody weather={weather} tempDimension={tempDimension} />
                    <WeatherBlockFooter weather={threeDaysWeather} tempDimension={tempDimension} />
                </>
            }
        </div>
    )
}

export default WeatherBlock;