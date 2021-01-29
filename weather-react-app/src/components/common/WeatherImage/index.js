import {useSelector} from 'react-redux';
import styles from './weatherImage.module.scss'

const WeatherImage = ({image, addClass})  => {
    const {id_icon, description} = image;
    const extendClass = addClass? `${addClass}_` : '';

    const timeZone = useSelector(state => state.weather.weather.timezone);
    const currentTimeZone = timeZone ? timeZone : 'Europe/Moscow';
    const now = new Date().toLocaleTimeString('en-GB', { timeZone: currentTimeZone });
    const nowHours =  now.split(':')[0];
    const times = (nowHours > 19 || nowHours < 9) ? 'n' : 'd';
    let correctIconID = id_icon;

    if (times === 'n') {
        const id_iconArr = id_icon.split('');
        id_iconArr[3] = 'n';
        correctIconID = id_iconArr.join('');
    }

    const imgURL_svg = `/images/${correctIconID}.svg`;
    const imgURL_png = `/images/${correctIconID}.png`;

    const handleImageError = (e) => {
        e.target.src = imgURL_png;
      }

    return (
            <img className = {styles[`${extendClass}image`]}
                src = {imgURL_svg}
                alt = {description}
                onError={handleImageError}
            />
    )
}
export default WeatherImage;