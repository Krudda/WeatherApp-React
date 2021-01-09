import DayForecast from './DayForecast';

import styles from './weatherFooter.module.scss'

const WeatherBlockFooter = ({weather}) => {

    const forecastThreeDays  = weather.map(forecast => {
        return  <DayForecast forecast = {forecast}/>
    })

    return (
        <div className = {styles.forecast}>
            {forecastThreeDays}
        </div>
    )
}

export default WeatherBlockFooter;