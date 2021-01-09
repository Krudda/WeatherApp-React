import PropTypes from 'prop-types';
import DateTime from './DateTime';
import TempBlock from '../../../common/TempBlock/TempBlock';
import WeatherDescription from './WeatherDescription';

import  styles from './weatherBody.module.scss';

const WeatherBlockBody = ({weather}) => {
    const current = weather ? weather[0] : 'lala';
    const temp = Math.round(current.high_temp) || '--';

    return (
        <div className = {styles.body}>
            <div className = {styles.date_temp}>
                <DateTime/>
                <TempBlock temp = {temp} temp_dimension = 'c'/>
            </div>
            <WeatherDescription weather = {current}/>
        </div>
    )
}



// WeatherBlockBody.propTypes = {
//     forecast: PropTypes.array
// }

// WeatherBlockBody.defaultProps = {
//     weather: [
//         {}
//     ]
// }
export default WeatherBlockBody;