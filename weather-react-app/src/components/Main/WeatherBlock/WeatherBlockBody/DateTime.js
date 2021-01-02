import  styles from './weatherBody.module.scss';

const DateTime = ()  => {
    const currentTime = new Date().toLocaleString();
    console.log('currentTime', currentTime)
    return (
        <div className = {styles.date_time}>
            <span>{currentTime}</span>
        </div>
    )
}
export default DateTime;