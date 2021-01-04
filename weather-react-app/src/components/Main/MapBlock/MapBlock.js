import {connect}  from 'react-redux';
import getMap from '../../../services/getMap';

import styles from './mapBlock.module.scss';

const MapBlock = ({location, lon, lat}) => {

    console.log('Map Location: ', location);
    getMap(lon, lat);
    

    return (
        <div className = {styles.block} id="map"></div>
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