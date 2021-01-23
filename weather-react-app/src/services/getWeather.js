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
    } catch (err) {
        console.log(err);
        return false;
    }
}

export default getCurrentWeather;