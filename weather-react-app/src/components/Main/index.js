import {useSelector, useDispatch}  from 'react-redux';

import MapBlock from './MapBlock/MapBlock';
import WeatherBlock from './WeatherBlock/WeatherBlock';
import {getWeather} from '../../redux/actions';

import style from './main.module.scss';

const Main = () => {

    const weather = useSelector(state => state.weather.weather.data);
    const tempDimension = useSelector(state => state.tempDimension.tempDimension);
    const location = useSelector(state => state.userLocation.userLocation);

    // const dispatch = useDispatch();
    // dispatch(getWeather(location));

    
    return (
        <div className = {style.main}>
            {location && weather &&
            <>
                <WeatherBlock 
                    weather = {weather}  
                    location = {location} 
                    tempDimension = {tempDimension}
                />
                <MapBlock location = {location}/>
            </>
            }
        </div>
    )
}

export default  Main;