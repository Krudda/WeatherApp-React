import  {useSelector} from 'react-redux';
import RSSDayForecast from './RSSDayForecast';
import days from '../../data/days';


import styles from './rss.module.scss';

const RSS = () => {

    const forecast = useSelector(state => state.weather.weather.data);

    let content = '';
    if (forecast) {
        content = forecast.map(day => {
            const date = new Date(day.valid_date);
            const dayOfWeek  = days[date.getDay()];
            const tempHigh = Math.round(day.high_temp);
            const tempLow = Math.round(day.low_temp);
            const signTempHigh = tempHigh > 0 ? `+${tempHigh}` : tempHigh;
            const signTempLow = tempLow > 0 ? `+${tempLow}` : tempLow;
            const weatherDesc = day.weather.description;
            const humidity = day.rh;
            const wind = `${day.wind_cdir_full}, ${Math.round(day.wind_spd)}`;

            return (
            <RSSDayForecast 
                key = {day.valid_date}
                date = {day.valid_date}
                dayOfWeek = {dayOfWeek}
                tempHigh = {signTempHigh}
                tempLow = {signTempLow}
                weatherDesc = {weatherDesc}
                humidity = {humidity}
                wind = {wind}
                />)
        })
    }

    return (
        <div className = {styles.rss_area}>
            <div className =  {styles.rss}>
                {content}
            </div>
        </div>
    )
}

export default  RSS;