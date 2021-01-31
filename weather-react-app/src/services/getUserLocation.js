import { keys } from '../data/apiKeys';

const key = keys.ipKEY;
const key2 = keys.ip2KEY;

const IPGeolocationAPI = require('ip-geolocation-api-javascript-sdk');
const ipgeolocationApi = new IPGeolocationAPI(key2, false);

// function getUserLocation() {
//   function handleResponse(json) {
//     console.log(json);
//     return json;
//   }
//   ipgeolocationApi.getGeolocation(handleResponse);

//   return {city: json.city.toLowerCase(), country: json.country_name.toLowerCase()};;
// }

// const IPGeolocationAPI = require('ip-geolocation-api-javascript-sdk');
// var ipgeolocationApi = new IPGeolocationAPI(key2);
// function handleResponse(json) {
//   console.log(json);
//   const location = {city: json.city.toLowerCase(), country: json.country_name.toLowerCase()};
//   return location
// }
// var GeolocationParams = require('ip-geolocation-api-javascript-sdk/GeolocationParams.js');

// Get complete geolocation for the calling machine's IP address
// ipgeolocationApi.getGeolocation(handleResponse);

// Get complete geolocation in Russian** for IP address (1.1.1.1)
// var geolocationParams = new GeolocationParams();
// geolocationParams.setIPAddress('1.1.1.1');
// geolocationParams.setLang('ru');

// ipgeolocationApi.getGeolocation(handleResponse, geolocationParams);

// Get custom geolocation (only "geo, time_zone and currency" fields/objects) for an IP address (1.1.1.1)
// var geolocationParams = new GeolocationParams();
// geolocationParams.setIPAddress('1.1.1.1'); 
// geolocationParams.setFields('geo,time_zone,currency');

// ipgeolocationApi.getGeolocation(handleResponse, geolocationParams);

// Exclude fields/obejects from complete geolocation in Italian language
// var geolocationParams = new GeolocationParams();
// geolocationParams.setExcludes('continent_name,country_code3,time_zone');
// geolocationParams.setLang('it');

// ipgeolocationApi.getGeolocation(handleResponse, geolocationParams);

async function getUserLocation() {
  const url = `https://ipinfo.io/json?token=${key}`;
  const url2 = `https://api.ipgeolocation.io/ipgeo?apiKey=${key2}`;
  try {
    const res = await fetch(url2);
    const data = await res.json();
    const location = {city: data.city.toLowerCase(), country: data.country_name.toLowerCase()};
    return location;
  } catch (err) {
    return {city: 'Nizhniy Novgorod', country: 'RU'}
  }
}

export default getUserLocation;