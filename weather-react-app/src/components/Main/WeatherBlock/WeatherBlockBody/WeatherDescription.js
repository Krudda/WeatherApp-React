import WeatherImage from '../../../common/WeatherImage';
import WeatherDesc from '../../../common/WeatherDesc/WeatherDesc';

import  styles from './weatherBody.module.scss';

const WeatherDescription = ()  => {

    const image = {
        id_icon:  't02d',
        description: 'Thunderstorm with rain'
    }

    return (
        <div className = {styles.desc}>
            <div className = {styles.desc_img}>
                <WeatherImage image = {image} />
            </div>
            <div className = {styles.desc_text}>
                <p className = {styles.weather_desc}>{image.description}</p>
                <WeatherDesc desc = 'FEELS LIKE' value = '27' dimension = ' °'/>
                <WeatherDesc desc = 'WIND' value = '8' dimension = 'm/c'/>
                <WeatherDesc desc = 'HUMIDITY' value = '78' dimension = ' %'/>
                <WeatherDesc desc = 'PRESSURE' value = '1008' dimension = 'mm Hg'/>
            </div>
        </div>
    )
}
export default WeatherDescription;