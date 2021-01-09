import countries from '../../data/countries.json';

export const getCountry = (countryCode) => {
    const countryCodeKnown =  countries.find((item) => item.country_code === countryCode);
    return countryCodeKnown ? countryCodeKnown.country_name : countryCode;
}

export const coordinatesConvertor = (num) => {
    if (!num) return false;
    const degree = Math.trunc(num);
    const rawMinute = Math.abs((num % 1) * 60);
    const minute = Math.trunc(rawMinute);
    const second = Math.round((rawMinute % 1) * 60);
    return `${degree}°${minute}′${second}′′`;
};