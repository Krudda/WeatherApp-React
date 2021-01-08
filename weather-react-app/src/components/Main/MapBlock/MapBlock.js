import {connect}  from 'react-redux';
import getMap from '../../../services/getMap';
import Geolocation from './Geolocation';

import styles from './mapBlock.module.scss';

const MapBlock = ({location, lon, lat}) => {

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

const mapStateToProps = state => {
    return {
        location: state.userLocation.userLocation,
        lon: state.weather.weather.lon,
        lat: state.weather.weather.lat,
    }
}

export default  connect(mapStateToProps, null)(MapBlock);