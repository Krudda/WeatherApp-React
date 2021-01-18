import {useSelector, useDispatch}  from 'react-redux';

import MapBlock from './MapBlock/MapBlock';
import WeatherBlock from './WeatherBlock/WeatherBlock';
import {getWeather} from '../../redux/actions';
import store from '../../redux/store';

import style from './main.module.scss';


const Main = () => {

    // const state = store.getState();
    // const weather = state.weather.weather.data;
    // const tempDimension = state.tempDimension.tempDimension;
    // const location = state.userLocation.userLocation;

    const weather = useSelector(state => state.weather.weather.data);
    // const city = useSelector(state => state.weather.weather.city_name);
    const tempDimension = useSelector(state => state.tempDimension.tempDimension);
    const location = useSelector(state => state.userLocation.userLocation);

    // const dispatch = useDispatch();
    // dispatch(getWeather(location));

    // const dispatch = useDispatch();  
    // dispatch(getWeather(location, tempDimension));

    
    return (
        <div className = {style.main}>
            {location && weather &&
                <>
                    <WeatherBlock 
                        weather = {weather}  
                        location = {location} 
                        tempDimension = {tempDimension}
                    />
                    <MapBlock />
                </>
            }
        </div>
    )
}

export default  Main;