import { useSelector } from 'react-redux';

import WeatherBlockHeader from './WeatherBlockHeader/WeatherBlockHeader';
import WeatherBlockBody from './WeatherBlockBody/WeatherBlockBody';
import WeatherBlockFooter from './WeatherBlockFooter/WeatherBlockFooter';

import styles from './weather.module.scss';
import Spinner from '../../common/Spinner';

const WeatherBlock = ({weather, location, tempDimension}) => {

    const loading = useSelector(state => state.loading.loading);
    const threeDaysWeather = weather.slice(1,4);

    
    return (
        <div className = {styles.weatherBlock}>
            { loading && <Spinner/> }
            { !loading && <>
                <WeatherBlockHeader location = {location} />
                <WeatherBlockBody weather = {weather} tempDimension = {tempDimension}/>
                <WeatherBlockFooter weather = {threeDaysWeather} tempDimension = {tempDimension}/>
            </>
            }
        </div>
    )
}

export default WeatherBlock;