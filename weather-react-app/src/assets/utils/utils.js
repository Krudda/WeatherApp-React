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

export const getSeason = () => {
    const now = new Date().getMonth();
    switch (now) {
        case 11:
        case 0:
        case 1:
            return 'winter';
        case 2:
        case 3:
        case 4:
            return 'spring';
        case 8:
        case 9:
        case 10:
            return 'fall';
        default:
            return 'summer';
    }
}