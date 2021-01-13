import store from '../redux/store';

const synth = window.speechSynthesis;

const speakerHandler = () => {

    const state = store.getState();
    const city = state.weather.weather.city_name;
    const weather = state.weather.weather.data[0];

    const temp = Math.round(weather.high_temp);
    const desc = weather.weather.description;
    const feelsLike = Math.round(weather.app_max_temp);
    const wind = `${weather.wind_cdir_full}, ${Math.round(weather.wind_spd)}`;
    const humidity = weather.rh;
    const pressure = Math.round(weather.pres);

    const phrase = `the air temperature in ${city} is ${temp} degrees, ${desc}, it feels like ${feelsLike} degrees.
    Wind ${wind} meters per second, air humidity ${humidity} percent, pressure ${pressure} millimeters of mercury.
    Have a nice day`;

    let voices = synth.getVoices();

    function speak() {
        if (synth.speaking) {
            synth.cancel();
            setTimeout(speak, 300);
        } else if (weather) {
            const utterThis = new SpeechSynthesisUtterance(phrase);

            utterThis.voice = voices.find(voice => voice.lang === 'en-US');
            utterThis.onerror = function (event) {

            };
            synth.speak(utterThis);
        }
    }
    speak();
}

export default  speakerHandler;