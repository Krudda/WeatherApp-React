import styles from './weatherImage.module.scss'

const WeatherImage = ({image, addClass})  => {
    const {id_icon, description} = image;
    const forecast = addClass? `${addClass}_` : '';

    const imgURL_svg = `/images/${id_icon}.svg`;
    const imgURL_png = `/images/${id_icon}.png`;
    const defaultURL = '/images/c03d.svg';

    return (
            <img className = {styles[`${forecast}image`]}
                src = {imgURL_svg || imgURL_png || defaultURL}
                alt = {description}
            />
    )
}
export default WeatherImage;