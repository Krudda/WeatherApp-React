import DayForecast from './DayForecast';

import styles from './weatherFooter.module.scss'

const WeatherBlockFooter = ({weather}) => {

    const forecastThreeDays  = weather.map(forecast => {
        return  <DayForecast key = {forecast.sunrise_ts} forecast = {forecast}/>
    })

    return (
        <div className = {styles.forecast}>
            {forecastThreeDays}
        </div>
    )
}

export default WeatherBlockFooter;