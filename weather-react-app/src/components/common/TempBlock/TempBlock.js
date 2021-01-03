import PropTypes from 'prop-types';

import  styles from './tempBlock.module.scss';

const TempBlock = ({temp, temp_dimension, addClass})  => {

    const forecast = addClass? `${addClass}_` : '';

    return (
        <div className = {styles[`${forecast}temp`]}>
            <span className = {styles.temp_data}>{temp}</span>
            <div className = {styles.temp_dimension}>
                <span className = {styles[`${forecast}degree`]}>°</span>
                <span className = {styles[`${forecast}degree_dimension`]}>{temp_dimension}</span>
            </div>
        </div>
    )
}

TempBlock.propTypes = {
    temp: PropTypes.number,
}

TempBlock.defaultProps = {
    addClass: '',
    temp: 0,
    temp_dimension: 'c'
}
export default TempBlock;