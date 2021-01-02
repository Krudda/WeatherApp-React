const WeatherDesc = ({desc, value, dimension}) => {
    return (
        <p>{desc}: <span>{value}</span><span>{dimension}</span></p>
    )
}
export default WeatherDesc;