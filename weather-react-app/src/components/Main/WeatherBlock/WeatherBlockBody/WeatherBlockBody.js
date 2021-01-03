import DateTime from './DateTime';
import TempBlock from '../../../common/TempBlock/TempBlock';
import WeatherDescription from './WeatherDescription';

import  styles from './weatherBody.module.scss';

const WeatherBlockBody = ({location}) => {
    return (
        <div className = {styles.body}>
            <div className = {styles.date_temp}>
                <DateTime/>
                <TempBlock temp = '27' temp_dimension = 'c'/>
            </div>
            <WeatherDescription/>
        </div>
    )
}
export default WeatherBlockBody;