import PropTypes from 'prop-types';
import TempBlock from '../../../common/TempBlock/TempBlock';
import WeatherImage from '../../../common/WeatherImage';
import days from '../../../../data/days'

import styles from './weatherFooter.module.scss'

const DayForecast = ({forecast}) => {

    const temp = Math.round(forecast.high_temp) || '--'
    const image = {
        id_icon:  forecast.weather.icon,
        description: forecast.weather.description
    }

    const dateForecast = new Date(forecast.valid_date);
    const dayOfWeek = days[dateForecast.getDay()] || '----------------';

    return (
        <div className = {styles.day}>
            <div className = {styles.day_week}>{dayOfWeek}</div>
            <div className = {styles.day_forecast}>
                <TempBlock temp = {temp} temp_dimension = 'c' addClass = 'day'/>
                <div className = {styles.day_cloud}>
                    {forecast && <WeatherImage image = {image} addClass = 'day'/>}
                </div>
            </div>
        </div>
    )
}

DayForecast.propTypes = {
    forecast: PropTypes.object
}

DayForecast.defaultProps = {
    forecast: {
        weather: {
            icon: '',
            description: ''
        }
    }
}
export default DayForecast;