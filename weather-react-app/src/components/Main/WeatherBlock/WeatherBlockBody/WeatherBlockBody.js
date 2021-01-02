import DateTime from './DateTime';
import CurrentTemp from './CurrentTemp';
import WeatherDescription from './WeatherDescription';

import  styles from './weatherBody.module.scss';

const WeatherBlockBody = ({location}) => {
    return (
        <div className = {styles.body}>
            <div className = {styles.date_temp}>
                <DateTime/>
                <CurrentTemp/>
            </div>
            <WeatherDescription/>
        </div>
    )
}
export default WeatherBlockBody;