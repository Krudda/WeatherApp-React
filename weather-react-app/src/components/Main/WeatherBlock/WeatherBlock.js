import {connect, useDispatch}  from 'react-redux';
import WeatherBlockHeader from './WeatherBlockHeader/WeatherBlockHeader';
import WeatherBlockBody from './WeatherBlockBody/WeatherBlockBody';
import WeatherBlockFooter from './WeatherBlockFooter/WeatherBlockFooter';
import {getWeather} from '../../../redux/actions';

import styles from './weather.module.scss';

const WeatherBlock = ({location}) => {
    
    const dispatch = useDispatch();
    dispatch(getWeather(location));

    console.log('location111: ', location)

    return (
        <div className = {styles.weatherBlock}>
            <WeatherBlockHeader location = {location}/>
            <WeatherBlockBody location = {location}/>
            <WeatherBlockFooter location = {location}/>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        location: state.userLocation.userLocation
    }
}

export default  connect(mapStateToProps, null)(WeatherBlock);