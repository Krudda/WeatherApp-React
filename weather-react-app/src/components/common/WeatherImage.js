import styles from './weatherImage.module.scss'

const WeatherImage = ({image, addClass})  => {
    const {id_icon, description} = image;
    const forecast = addClass? `${addClass}_` : '';

    const imgURL = `/images/${id_icon}.svg`;

    console.log('imgURL', imgURL)

    return (
            <img className = {styles[`${forecast}image`]}
                src = {imgURL}
                // || {`../../assets/images/${id_icon}.png`}
                alt = {description}
            />
    )
}
export default WeatherImage;