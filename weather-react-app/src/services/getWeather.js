import store from '../redux/store';

import { keys } from '../data/apiKeys';

const state = store.getState();
const currentDimension = state.tempDimension.tempDimension;
const weatherUnit = currentDimension === 'f' ? 'I' : 'M';

const key = keys.weather3KEY;

async function getCurrentWeather(location) {
    let {city, country} = location;
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}, ${country}&days=7&lang=en&units=${weatherUnit}&key=${key}`;
    try {
        const res = await fetch(url);
        if (res.status === 200) {
        const data = await res.json();
        return data;
        }

    // handleBadRequest();
    } catch (err) {
        console.log('Ошибооооочка!!!! ', err);
        return false;
    }
}

export default getCurrentWeather;