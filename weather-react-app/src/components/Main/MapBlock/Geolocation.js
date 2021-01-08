import {coordinatesConvertor}  from '../../../assets/utils/utils';

import styles from './mapBlock.module.scss';

const Geolocation = ({lon, lat}) => {

    const latitude = coordinatesConvertor(lat);
    const longitude = coordinatesConvertor(lon);

    return (
        <div className = {styles.geolocation_area}>
            {latitude && <div className = {styles.coordinates}>
                <p>Latitude: {latitude}</p>
                <p>Longitude: {longitude}</p>
            </div>}
        </div>
    )
}

export default  Geolocation;