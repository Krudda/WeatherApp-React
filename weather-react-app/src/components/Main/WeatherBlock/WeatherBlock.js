import {connect, useDispatch}  from 'react-redux';
import WeatherBlockHeader from './WeatherBlockHeader/WeatherBlockHeader';
import WeatherBlockBody from './WeatherBlockBody/WeatherBlockBody';
import WeatherBlockFooter from './WeatherBlockFooter/WeatherBlockFooter';
import {getWeather} from '../../../redux/actions';
import { getCountry } from '../../../assets/utils/utils';

import styles from './weather.module.scss';

const WeatherBlock = ({weather, location}) => {

    const threeDaysWeather = weather.slice(1,4);

    return (
        <div className = {styles.weatherBlock}>
            <WeatherBlockHeader location = {location} />
            <WeatherBlockBody weather = {weather}/>
            <WeatherBlockFooter weather = {threeDaysWeather}/>
        </div>
    )
}

export default WeatherBlock;