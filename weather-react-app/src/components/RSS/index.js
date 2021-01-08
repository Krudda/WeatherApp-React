import  {connect} from 'react-redux';
import RSSDayForecast from './RSSDayForecast';
import {days} from '../../assets/utils/utils';


import styles from './rss.module.scss';

const RSS = ({forecast}) => {

    let content = '';
    if (forecast) {
        content = forecast.map(day => {
            const date = new Date(day.valid_date);
            const dayOfWeek  = days[date.getDay()];
            const temp = Math.round(day.app_max_temp);
            const signTemp = temp > 0 ? `+${temp}` : temp;
            const weatherDesc = day.weather.description;
            const humidity = day.rh;
            const wind = `${day.wind_cdir_full}, ${Math.round(day.wind_spd)}`;

            return (
            <RSSDayForecast 
                key = {day.valid_date}
                date = {day.valid_date}
                dayOfWeek = {dayOfWeek}
                temp = {signTemp}
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
const mapStateToProps = state => {
    return {
        forecast: state.weather.weather.data
    }
}

export default  connect(mapStateToProps, null)(RSS);