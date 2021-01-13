import {useSelector}  from 'react-redux';
import getMap from '../../../services/getMap';
import Geolocation from './Geolocation';

import styles from './mapBlock.module.scss';

const MapBlock = () => {

    const location = useSelector(state => state.userLocation.userLocation);
    const lon = useSelector(state => state.weather.weather.lon);
    const lat = useSelector(state => state.weather.weather.lat);

    console.log('Map Location: ', location);
    getMap(lon, lat);

    return (
        <div className = {styles.block}>
            <div className = {styles.map_area}>
                <div id="map" className = {styles.map}></div>
            </div>
            <Geolocation lon = {lon} lat= {lat} />
        </div>
        
    )
}


export default  MapBlock;