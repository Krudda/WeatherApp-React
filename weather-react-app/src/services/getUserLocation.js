import { keys } from '../data/apiKeys';

const key = keys.ip2KEY;

async function getUserLocation() {
  const url = `https://api.ipgeolocation.io/ipgeo?apiKey=${key}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    const location = {city: data.city.toLowerCase(), country: data.country_name.toLowerCase()};
    console.log('location', location)
    return location;
  } catch (err) {
    // return {city: 'Nizhniy Novgorod', country: 'RU'}
  }
}

export default getUserLocation;