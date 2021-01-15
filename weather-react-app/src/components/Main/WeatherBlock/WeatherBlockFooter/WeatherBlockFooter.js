import DayForecast from './DayForecast';

import styles from './weatherFooter.module.scss'

const WeatherBlockFooter = ({weather, tempDimension}) => {

    const forecastThreeDays  = weather.map(forecast => {
        return  <DayForecast key = {forecast.sunrise_ts} forecast = {forecast} tempDimension = {tempDimension}/>
    })

    return (
        <div className = {styles.forecast}>
            {forecastThreeDays}
        </div>
    )
}

export default WeatherBlockFooter;