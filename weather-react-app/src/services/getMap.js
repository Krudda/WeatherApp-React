/* eslint-disable no-undef */
const getMap = (lon, lat) => {

  console.log('lat: ', lat, 'lon:', lon);
  ymaps.ready(init);
  
  function init() {
    if (lat) {
      const myMap = new ymaps.Map('map', {
        center: [lat, lon],
        zoom: 10,
      }, {
        searchControlProvider: 'yandex#search',
      });
    
      myMap.geoObjects
        .add(new ymaps.Placemark([lat, lon], {}, {
          preset: 'islands#redIcon',
        }));
    }
  }
};
  
  export default getMap;