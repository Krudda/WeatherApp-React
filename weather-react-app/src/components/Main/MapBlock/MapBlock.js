import {connect}  from 'react-redux';

import styles from './mapBlock.module.scss';

const MapBlock = ({location}) => {

    console.log('Map Location: ', location)

    return (
        <div className = {styles.block} >
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