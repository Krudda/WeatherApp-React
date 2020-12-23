import {connect}  from 'react-redux';

import styles from './weather.module.scss';


const WeatherBlock = ({location}) => {
    return (
        <div className = {styles.weatherBlock}>
            Weather in {location.city}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        location: state.userLocation.userLocation
    }
}

export default  connect(mapStateToProps, null)(WeatherBlock);