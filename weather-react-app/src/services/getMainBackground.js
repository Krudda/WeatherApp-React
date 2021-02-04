import { keys } from '../data/apiKeys';
import { getSeason } from '../assets/utils/utils';

const key = keys.imageKEY;

async function getMainBackground(ImageWeather = '', timezone) {

    const currentTimeZone = timezone ? timezone : 'Europe/Moscow'
    const now = new Date().toLocaleTimeString('en-GB', { timeZone: currentTimeZone });
    const season = getSeason();
    const nowHours =  now.split(':')[0];
    const times = (nowHours > 19 || nowHours < 9) ? 'night' : 'day';
    const query = `nature, ${currentTimeZone}, ${season}, ${ImageWeather}, ${times}`;

    const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&
    query=${query}
    &client_id=${key}`;

    const defaultBGImageURL = 'https://momentum.photos/img/5ba1ea15-393c-428a-899b-13aafaebe222.jpg';
    
    try {
        const res = await fetch(url);
        const data = await res.json();
        const backgroundImageURL = data.urls.regular;
        return backgroundImageURL
    } catch (err) {
        return defaultBGImageURL
    }
};

export default getMainBackground;