import { keys } from '../data/apiKeys';

const key = keys.ipKEY;
const key2 = keys.ip2KEY;

async function getUserLocation() {
  const url1 = `https://api.ipgeolocation.io/ipgeo?apiKey=${key2}`;
  const url2 = `https://ipinfo.io/json?token=${key}`;
  try {
    const res = await fetch(url1);
    const data = await res.json();
    const location = {city: data.city.toLowerCase(), country: data.country_name.toLowerCase()};
    return location;
  } catch (err) {
    const res = await fetch(url2);
    const data = await res.json();
    const location2 = {city: data.city.toLowerCase(), country: data.country.toLowerCase()};
    return location2;
  }
}

export default getUserLocation;