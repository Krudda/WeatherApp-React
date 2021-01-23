import  styles from './tempBlock.module.scss';

const TempBlock = ({temp, tempDimension, addClass})  => {

    const forecast = addClass ? `${addClass}_` : '';

    return (
        <div className = {styles[`${forecast}temp`]}>
            <span className = {styles.temp_data}>{temp}</span>
            <div className = {styles.temp_dimension}>
                <span className = {styles[`${forecast}degree`]}>°</span>
                <span className = {styles[`${forecast}degree_dimension`]}>{tempDimension}</span>
            </div>
        </div>
    )
}

TempBlock.defaultProps = {
    addClass: '',
    temp: 0,
}
export default TempBlock;