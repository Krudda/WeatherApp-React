import DateTime from './DateTime';
import TempBlock from '../../../common/TempBlock';
import WeatherDescription from './WeatherDescription';

import  styles from './weatherBody.module.scss';

const WeatherBlockBody = ({weather, tempDimension}) => {
    const current = weather[0];
    const temp = Math.round(current.high_temp);

    return (
        <div className = {styles.body}>
            <div className = {styles.date_temp}>
                <DateTime/>
                <TempBlock temp = {temp} tempDimension = {tempDimension}/>
            </div>
            <WeatherDescription weather = {current} tempDimension = {tempDimension}/>
        </div>
    )
}

export default WeatherBlockBody;