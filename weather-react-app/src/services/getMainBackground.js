import { keys } from '../data/apiKeys';

const key = keys.imageKEY;

async function getMainBackground(ImageWeather = '', timezone = 'Europe/Moscow') {
    const now = new Date().toLocaleTimeString('en-GB', { timeZone: timezone });
    const nowHours =  now.split(':')[0];
    const times = (nowHours > 19 || nowHours < 9) ? 'night' : 'day';
    const query = `${ImageWeather}, ${times}`;
    const url = `https://api.unsplash.com/photos/random?orientation=landscape&per_page=1&query=summer nature ${query}&client_id=${key}`;

    const defaultBGImageURL = 'https://images.unsplash.com/photo-1563823856120-88d1fe6b75bc?ixlib=rb-1.2.1&q=99&fm=jpg&crop=entropy&cs=tinysrgb&w=2048&fit=max&ixid=eyJhcHBfaWQiOjcwOTV9';
    
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