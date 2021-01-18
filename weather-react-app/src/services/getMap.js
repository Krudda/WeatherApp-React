/* eslint-disable no-undef */
const getMap = (lon, lat) => {
  console.log('Рисую карту!!!')

  ymaps.ready(init);
  
  function init() {
    if (lat) {
      const weatherMap = new ymaps.Map('map', {
        center: [lat, lon],
        zoom: 10,
        controls: ['zoomControl', 'typeSelector', 'fullscreenControl']
      }, {
        searchControlProvider: 'yandex#search',
      });
    
      weatherMap.geoObjects
        .add(new ymaps.Placemark([lat, lon], {}, {
          preset: 'islands#redIcon',
        }));
    }
  }
};
  
  export default getMap;