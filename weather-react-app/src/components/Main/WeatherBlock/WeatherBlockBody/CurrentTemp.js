import  styles from './weatherBody.module.scss';

const CurrentTemp = ()  => {

    return (
        <div className = {styles.temp}>
            <span className = {styles.temp_data}>27</span>
            <div className = {styles.temp_dimension}>
                <span className = {styles.degree}>°</span>
                <span className = {styles.degree_dimension}>c</span>
            </div>
        </div>
    )
}
export default CurrentTemp;