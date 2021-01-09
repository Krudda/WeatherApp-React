import days from '../../../../data/days';

import  styles from './weatherBody.module.scss';

const DateTime = ()  => {
    const currentDate = new Date();
    const currentTime = currentDate.toLocaleString();

    const dayOfWeek = (days[currentDate.getDay()]).toUpperCase();
    return (
        <div className = {styles.date_time}>
            <span>{dayOfWeek}, {currentTime}</span>
        </div>
    )
}
export default DateTime;