import styles from './mapBlock.module.scss';
import {connect}  from 'react-redux';


const MapBlock = ({location}) => {
    console.log('location:', location) ;
    return (
        <div className = {styles.block}>
            <p>Map</p>
            <p>User from {location.city}</p>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        location: state.userLocation.userLocation
    }
}

export default  connect(mapStateToProps, null)(MapBlock);