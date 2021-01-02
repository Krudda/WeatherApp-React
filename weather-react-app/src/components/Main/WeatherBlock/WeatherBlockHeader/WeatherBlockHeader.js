import { getCountry } from '../../../../assets/utils/utils';
import styles from './weatherHeader.module.scss';

const WeatherBlockHeader = ({location}) => {

    console.log('location1111111', location);

    const {city} = location;
    const country = getCountry(location.country)

    console.log('city: ', city )
    return (
        <div className = {styles.w_header }>
            <span>{city},</span>
            <br/>
            <span className = {styles.w_header_country}>{country}</span>
        </div>
    )
}
export default WeatherBlockHeader;