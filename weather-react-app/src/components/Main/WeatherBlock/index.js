import { useSelector } from 'react-redux';

import WeatherBlockHeader from './WeatherBlockHeader';
import WeatherBlockBody from './WeatherBlockBody';
import WeatherBlockFooter from './WeatherBlockFooter';
import Spinner from '../../common/Spinner';

import styles from './weather.module.scss';

const WeatherBlock = ({ weather, location, tempDimension }) => {

    const loading = useSelector(state => state.serviceStates.weatherLoading);
    const threeDaysWeather = weather.slice(1, 4);

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