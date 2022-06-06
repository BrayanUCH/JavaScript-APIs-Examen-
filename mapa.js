function mostrarMapa(){
  let num1 = parseFloat(document.getElementById('l1').value);
  let num2 = parseFloat(document.getElementById('l2').value);

  var coord = {lat: num1, lng: num2};
  var map = new google.maps.Map(document.getElementById('map'),{
    zoom: 10,
    center: coord
  });
  var marker = new google.maps.Marker({
    position: coord,
    map: map
  });
  // alert(num1);
}
 //    http://127.0.0.1:5500/mapa.html