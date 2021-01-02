import countries from '../../data/countries.json';

export const getCountry = (countryCode) => {
    const countryCodeKnown =  countries.find((item) => item.country_code === countryCode);
    return countryCodeKnown ? countryCodeKnown.country_name : countryCode;
}
