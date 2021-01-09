import PropTypes from 'prop-types';
import WeatherImage from '../../../common/WeatherImage';
import WeatherDesc from '../../../common/WeatherDesc/WeatherDesc';

import  styles from './weatherBody.module.scss';

const WeatherDescription = ({weather})  => {

    console.log('weather!!!!!!', weather)

    const image = {
        id_icon:  weather.weather.icon,
        description: weather.weather.description
    }

    const fellsLike = Math.round(weather.app_max_temp) || '--';
    const windSpd = Math.round(weather.wind_spd) || '--';
    const hum = Math.round(weather.rh) || '--';
    const press = Math.round(weather.pres) || '--';

    return (
        <div className = {styles.desc}>
            <div className = {styles.desc_img}>
                <WeatherImage image = {image} />
            </div>
            <div className = {styles.desc_text}>
                <p className = {styles.weather_desc}>{image.description}</p>
                <WeatherDesc desc = 'FEELS LIKE' value = {fellsLike} dimension = ' °'/>
                <WeatherDesc desc = 'WIND' value = {windSpd} dimension = 'm/c'/>
                <WeatherDesc desc = 'HUMIDITY' value = {hum} dimension = ' %'/>
                <WeatherDesc desc = 'PRESSURE' value = {press} dimension = 'mm Hg'/>
            </div>
        </div>
    )
}

WeatherDescription.propTypes = {
    forecast: PropTypes.object
}

WeatherDescription.defaultProps = {
    weather: {
        weather: {
            icon: '',
            description: ''
        }
    }
}
export default WeatherDescription;