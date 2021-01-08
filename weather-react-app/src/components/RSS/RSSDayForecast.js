import styles from './rss.module.scss';

const RSSDayForecast = (props) => {
    const {date, 
        dayOfWeek, 
        temp, 
        weatherDesc,
        humidity,
        wind } = props;
    return (
        <>
            <p className = {styles.rss_date}>
                {dayOfWeek},  {date}:
            </p>
            <p>
                <span className = {styles.rss_temp}>{temp}°</span>
            </p>
            <p>
                {weatherDesc}
            </p>
            <p>
                Humidity: {humidity}%
            </p>
            <p>
                Wind: {wind}m/s
            </p>
        </>
    )
}

export default RSSDayForecast;