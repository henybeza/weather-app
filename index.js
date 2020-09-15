var city = "Dubai";
$.getJSON("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=b38dc1d544f383e98760661044023cc7",

 function(data){

console.log(data);

var icon = "https://api.openweathermap.org/img/w/" + data.weather[0].icon + ".png";
var weather = data.weather[0].main;
var temp = Math.floor(data.main.temp);

$('.icon').attr('src', icon);
$('.weather').append(weather);
$('.temp').append(temp);

});
