/**
 * 5. Create a button with the text called "Log location". When this button is clicked the location
 * (latitude, longitude) of the user should be logged out using this browser api
 */
const logLocationBtn = document.querySelector('button.logLocationBtn');

if ('geolocation' in navigator) {
  /* geolocation is available */
  console.log('geolocation is available');
} else {
  /* geolocation IS NOT available */
  console.log('geolocation IS NOT available');
}

logLocationBtn.addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude, position.coords.longitude);

    renderLocationOnGoogleMap(position.coords.latitude, position.coords.longitude);
  });
});

/**
 * 6. Optional Now show that location on a map using fx the Google maps api
 */

function renderLocationOnGoogleMap(lat, lng) {
  const mapDiv = document.querySelector('#map');
  const map = new google.maps.Map(mapDiv, {
    center: { lat, lng },
    zoom: 12
  });

  console.log(map);
}
