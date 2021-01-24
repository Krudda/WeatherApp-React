import { keys } from '../data/apiKeys';

const key = keys.ipKEY;

async function getUserLocation() {
  const url = `https://ipinfo.io/json?token=${key}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    const location = {city: data.city.toLowerCase(), country: data.country.toLowerCase()};
    console.log('REAL location: ', location)
    return location;
  } catch (err) {
    return {city: 'London', country: 'GB'}
  }
}

export default getUserLocation;