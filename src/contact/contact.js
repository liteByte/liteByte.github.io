function adjustTextArea(textarea) {
  textarea.style.height = "1px";
  textarea.style.height = (100 + textarea.scrollHeight) + "px";
}

function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.5883534, lng: -58.4298406},
    scrollwheel: false,
    zoom: 16
  });
  var marker = new google.maps.Marker({
    map: map,
    position: {lat: -34.5883534, lng: -58.4298406},
    title: 'We are here!'
  });
}