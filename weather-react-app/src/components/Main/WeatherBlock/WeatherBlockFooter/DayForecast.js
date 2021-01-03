import TempBlock from '../../../common/TempBlock/TempBlock';
import WeatherImage from '../../../common/WeatherImage';

import styles from './weatherFooter.module.scss'

const DayForecast = ({forecast}) => {
    const image = {
        id_icon:  'c01d',
        description: 'Thunderstorm with rain'
    }
    return (
        <div className = {styles.day}>
            <div className = {styles.day_week}>Monday</div>
            <div className = {styles.day_forecast}>
                <TempBlock temp = '-27' temp_dimension = 'c' addClass = 'day'/>
                <div className = {styles.day_cloud}>
                    <WeatherImage image = {image} addClass = 'day'/>
                </div>
            </div>
        </div>
    )
}
export default DayForecast;