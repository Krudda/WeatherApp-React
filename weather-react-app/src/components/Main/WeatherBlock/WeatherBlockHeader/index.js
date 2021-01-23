import { getCountry } from '../../../../assets/utils/utils';
import styles from './weatherHeader.module.scss';

const WeatherBlockHeader = ({location}) => {

    const city = location.city;
    const country = getCountry(location.country);

    return (
        <div className = {styles.w_header }>
            <span>{city},</span>
            <br/>
            <span className = {styles.w_header_country}>{country}</span>
        </div>
    )
}
export default WeatherBlockHeader;