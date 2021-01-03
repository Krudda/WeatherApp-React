import DayForecast from './DayForecast';

import styles from './weatherFooter.module.scss'

const WeatherBlockFooter = ({forecast}) => {
    return (
        <div className = {styles.forecast}>
            <DayForecast/>
            <DayForecast/>
            <DayForecast/>
        </div>
    )
}
export default WeatherBlockFooter;