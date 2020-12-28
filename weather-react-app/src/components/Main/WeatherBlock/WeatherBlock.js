import {connect, useDispatch}  from 'react-redux';
import {getWeather} from '../../../redux/actions';

import styles from './weather.module.scss';

const WeatherBlock = ({location}) => {

    console.log('location',  location);
    
    const dispatch = useDispatch();
    dispatch(getWeather(location));

    return (
        <div className = {styles.weatherBlock}>
            Weather in {location.city}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        location: state.userLocation.userLocation
    }
}

export default  connect(mapStateToProps, null)(WeatherBlock);