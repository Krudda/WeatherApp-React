import classNames from 'classnames';
import styles from './spinner.module.scss';

const Spinner = ({add_class}) => {

    const classes = classNames(
        styles.spinner, 
        add_class !== '' ? styles[add_class] : false
    )

    return (
        <div className = {classes}>
            <div className={styles.lds_spinner}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

Spinner.defaultProps = {
    add_class: ''
}

export default Spinner;