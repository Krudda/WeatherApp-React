import WeatherBlockHeader from './WeatherBlockHeader/WeatherBlockHeader';
import WeatherBlockBody from './WeatherBlockBody/WeatherBlockBody';
import WeatherBlockFooter from './WeatherBlockFooter/WeatherBlockFooter';

import styles from './weather.module.scss';

const WeatherBlock = ({weather, location, tempDimension}) => {

    const threeDaysWeather = weather.slice(1,4);

    return (
        <div className = {styles.weatherBlock}>
            <WeatherBlockHeader location = {location} />
            <WeatherBlockBody weather = {weather} tempDimension = {tempDimension}/>
            <WeatherBlockFooter weather = {threeDaysWeather} tempDimension = {tempDimension}/>
        </div>
    )
}

export default WeatherBlock;