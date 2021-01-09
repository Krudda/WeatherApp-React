import {connect, useDispatch}  from 'react-redux';

import MapBlock from './MapBlock/MapBlock';
import WeatherBlock from './WeatherBlock/WeatherBlock';
import {getWeather} from '../../redux/actions';

import style from './main.module.scss';

const Main = ({location, weather}) => {

    // const dispatch = useDispatch();
    // dispatch(getWeather(location));

    return (
        <div className = {style.main}>
            {location && weather &&
            <>
                <WeatherBlock weather = {weather}  location = {location}/>
                <MapBlock location = {location}/>
            </>
            }
        </div>
    )
}
const mapStateToProps = state => {
    return {
        location: state.userLocation.userLocation,
        weather: state.weather.weather.data
    }
}

export default  connect(mapStateToProps, null)(Main);