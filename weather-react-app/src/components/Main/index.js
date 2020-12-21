import MapBlock from './MapBlock/MapBlock';
import WeatherBlock from './WeatherBlock/WeatherBlock';

import style from './main.module.scss';

const Main = () => {
    return (
        <div className = {style.main}>
            <WeatherBlock />
            <MapBlock/>
        </div>
    )
}

export default Main;