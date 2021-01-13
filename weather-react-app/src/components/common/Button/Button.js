import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './button.module.scss';

const Button = ({
    children,
    type_view, 
    add_class, 
    handler, 
    active, 
    disabled, 
    ...attrs
}) => {

    const classes = classNames(
        styles.button, 
        styles[type_view ],
        active ? styles.active : false,
        disabled ? styles.disabled : false,
        add_class !== '' ? styles[add_class] : false,
    )

    return (
        <button 
            {...attrs}
            className={classes}
            onClick = {handler}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    children: PropTypes.node,
    type: PropTypes.string,
    add_class: PropTypes.string,
    handler: PropTypes.func.isRequired, 
    active: PropTypes.bool,
    disabled: PropTypes.bool
}

Button.defaultProps = {
    add_class: '',
    type_view : 'regular',
    active: false,
    disabled: false
}



export default  Button;