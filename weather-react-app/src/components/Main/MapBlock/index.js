import { useSelector } from 'react-redux';
import Geolocation from './Geolocation';
import Spinner from '../../common/Spinner'
import Map from './Map';

import styles from './mapBlock.module.scss';

const MapBlock = () => {
    const lon = useSelector(state => state.weather.weather.lon);
    const lat = useSelector(state => state.weather.weather.lat);
    const loading = useSelector(state => state.serviceStates.weatherLoading);

    return (
        <div className={styles.block}>
            <div className={styles.map_area}>
                {loading ?
                    <Spinner /> :
                    <Map lon={lon} lat={lat} />
                }
            </div>
            <Geolocation lon={lon} lat={lat} />
        </div>

    )
}

export default MapBlock;