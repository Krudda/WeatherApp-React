import { useDispatch, connect, useSelector }  from 'react-redux';
import getMap from '../../../services/getMap';
import Geolocation from './Geolocation';
import Spinner from '../../common/Spinner'

import styles from './mapBlock.module.scss';
import { showMap } from '../../../redux/actions';

const MapBlock = ({lon, lat, loading}) => {

    // const location = useSelector(state => state.userLocation.userLocation);
    // const lon = useSelector(state => state.weather.weather.lon);
    // const lat = useSelector(state => state.weather.weather.lat);
    // const loading = useSelector(state => state.loading.loading);

    // console.log('Map Location: ', location);
    getMap(lon, lat);

    return (
        <div className = {styles.block}>
                <div className = {styles.map_area}>
                    { loading && <Spinner/>}
                    <div id="map" className = {styles.map}></div>
                </div>
                <Geolocation lon = {lon} lat= {lat} />
        </div>
        
    )
}

const mapStateToProps = (state) => {
    return {
        lon: state.weather.weather.lon,
        lat: state.weather.weather.lat,
        loading: state.loading.loading
    }
}


export default  connect(mapStateToProps)(MapBlock);