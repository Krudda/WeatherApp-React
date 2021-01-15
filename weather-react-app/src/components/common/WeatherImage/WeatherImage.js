import styles from './weatherImage.module.scss'

const WeatherImage = ({image, addClass})  => {
    const {id_icon, description} = image;
    const extendClass = addClass? `${addClass}_` : '';

    const imgURL_svg = `/images/${id_icon}.svg`;
    const imgURL_png = `/images/${id_icon}.png`;

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