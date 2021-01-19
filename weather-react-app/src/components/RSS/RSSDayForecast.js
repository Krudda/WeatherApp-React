import styles from './rss.module.scss';

const RSSDayForecast = (props) => {
    const {date, 
        dayOfWeek, 
        tempHigh,
        tempLow, 
        weatherDesc,
        humidity,
        wind } = props;
    return (
        <div>
            <p className = {styles.rss_date}>{dayOfWeek},  {date}:</p>
            <p>
                <span className = {styles.rss_temp}>{tempHigh}°/{tempLow}°</span>
            </p>
            <p>{weatherDesc}</p>
            <p>Humidity: {humidity}%</p>
            <p>Wind: {wind}m/s</p>
        </div>
    )
}

export default RSSDayForecast;