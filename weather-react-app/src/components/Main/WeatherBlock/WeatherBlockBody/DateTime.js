import {useSelector} from 'react-redux';
import LocalTime from './LocalTime';

import  styles from './weatherBody.module.scss';

const DateTime = ()  => {
    const timeZone = useSelector(state => state.weather.weather.timezone);

    return (
        <div className = {styles.date_time}>
            <LocalTime timeZone = {timeZone}/>
        </div>
    )
}
export default DateTime;