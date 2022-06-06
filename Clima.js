var CIUDAD = document.querySelector('#ciudad');
var TEMP = document.querySelector('.Temperatura');
var CLIMA = document.querySelector('.Clima');
var ABUN = document.querySelector('.Abundancia');
//fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')

fetch('https://api.openweathermap.org/data/2.5/weather?lat=8.784420&lon=-82.958701&appid=233a655e837d48ffb4d4a2fa5e4fc009')
.then(response => response.json())
.then(data => {
  var temperatura = data['main']['temp'];
  var ciudad = data['name'];
  var abuNubes = data['clouds']['all'];
  var clima = data['weather'][0]['main'];

  var aux = parseFloat(temperatura) - 273.15;
  CIUDAD.innerHTML = "Pronostico climático actual en " +ciudad;
  CLIMA.innerHTML = "Clima: " + clima;
  TEMP.innerHTML = "Temperatura: " + aux.toFixed(2) ;
  ABUN.innerHTML = "Abundancia de nubes: " + abuNubes;

})