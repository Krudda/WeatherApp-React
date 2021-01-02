import styles from './weatherImage.module.scss'

const WeatherImage = ({image})  => {
    const {id_icon, description} = image;

    const imgURL = `../../../assets/images/${id_icon}.svg`;

    console.log('imgURL', imgURL)

    return (
            <img 
                src = {imgURL}
                // || {`../../assets/images/${id_icon}.png`}
                alt = {description}
            />
    )
}
export default WeatherImage;