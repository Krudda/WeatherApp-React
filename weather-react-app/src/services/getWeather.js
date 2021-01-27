import { keys } from '../data/apiKeys';

const key = keys.weather3KEY;

async function getCurrentWeather(location, tempDimension) {
    const {city, country = ''} = location;
    const weatherUnit = tempDimension === 'f' ? 'I' : 'M';
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}, ${country}&days=7&lang=en&units=${weatherUnit}&key=${key}`;

    try {
        const res = await fetch(url);
        if (res.status === 200) {
            const data = await res.json();
            console.log('weather', data);
            return data;
        }
        if (res.status === 204) {
            return {'error': '204'}
        }
        if (res.status === 403) {
            return {'error': '403'}
        }
    } catch (err) {
        return {error: err};
    }
}

export default getCurrentWeather;