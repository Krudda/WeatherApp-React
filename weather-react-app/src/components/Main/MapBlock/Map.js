import { useEffect } from 'react';
import getMap from '../../../services/getMap';

import styles from './mapBlock.module.scss';

const Map = ({ lon, lat }) => {

    useEffect(() => {
        getMap(lon, lat);
    }, [lon, lat])

    return (
        <div id="map" className={styles.map}></div>
    )
}

export default Map;