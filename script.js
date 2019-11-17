var searchQuery = $("#searchField").val();
var searchButton = $("#searchButton");
var Austin = $("#Austin");
var Chicago = $("#Chicago");
var newYork = $("#newYork");
var Orlando = $("#Orlando");
var sanFrancisco = $("#sanFrancisco");
var Seattle = $("#Seattle");
var Denver = $("#Denver");
var Atlanta = $("#Atlanta");
var APIKey = "166a433c57516f51dfab1f7edaed8413";
var searchWeather = "https://api.openweathermap.org/data/2.5/weather?q=" 
    + searchQuery + "&units=imperial&appid=" + APIKey;
var searchForecast = "https://api.openweathermap.org/data/2.5/forecast?q=" 
    + searchQuery + "&units=imperial&appid=" + APIKey;
var AustinWeather = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=Austin,Texas&units=imperial&appid=" + APIKey;
var AustinForecast = "https://api.openweathermap.org/data/2.5/forecast?" +
      "q=Austin,Texas&units=imperial&appid=" + APIKey;
var ChicagoWeather = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=Chicago,Illinois&units=imperial&appid=" + APIKey;
var ChicagoForecast = "https://api.openweathermap.org/data/2.5/forecast?" +
      "q=Chicago,Illinois&units=imperial&appid=" + APIKey;
var newYorkWeather = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=New+York,New+York&units=imperial&appid=" + APIKey;
var newYorkForecast = "https://api.openweathermap.org/data/2.5/forecast?" +
      "q=New+York,New+York&units=imperial&appid=" + APIKey;
var OrlandoWeather = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=Orlando,Florida&units=imperial&appid=" + APIKey;
var OrlandoForecast = "https://api.openweathermap.org/data/2.5/forecast?" +
      "q=Orlando,Florida&units=imperial&appid=" + APIKey;
var sanFranciscoWeather = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=San+Francisco,California&units=imperial&appid=" + APIKey;
var sanFranciscoForecast = "https://api.openweathermap.org/data/2.5/forecast?" +
      "q=San+Francisco,California&units=imperial&appid=" + APIKey;
var SeattleWeather = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=Seattle,Washington&units=imperial&appid=" + APIKey;
var SeattleForecast = "https://api.openweathermap.org/data/2.5/forecast?" +
      "q=Seattle,Washington&units=imperial&appid=" + APIKey;
var DenverWeather = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=Denver,Colorado&units=imperial&appid=" + APIKey;
var DenverForecast = "https://api.openweathermap.org/data/2.5/forecast?" +
      "q=Denver,Colorado&units=imperial&appid=" + APIKey;
var AtlantaWeather = "https://api.openweathermap.org/data/2.5/weather?" +
      "q=Atlanta,Georgia&units=imperial&appid=" + APIKey;
var AtlantaForecast = "https://api.openweathermap.org/data/2.5/forecast?" +
      "q=Atlanta,Georgia&units=imperial&appid=" + APIKey;

$("#searchButton").on("click", function() {
    $.ajax({
      url: searchWeather,
      method: "GET"
    })
    .then(function(response) {
        console.log(response);
        $("#cityName").html("<h1>" + response.name + "</h1>");
        $("#temperature").text("Temperature: " + response.main.temp + " degrees F");
        $("#humidity").text("Humidity: " + response.main.humidity + "%");
        $("#windSpeed").text("Wind Speed: " + response.wind.speed + " MPH");
        $("#uvIndex").text("UV Index:");
    })});

$("#searchButton").on("click", function() {
    $.ajax({
      url: searchForecast,
      method: "GET"
    })
    .then(function(response) {
        console.log(response);
        $("#day1Temp").text("Temperature: " + response.list[7].main.temp + " degrees F");
        $("#day1Humidity").text("Humidity: " + response.list[7].main.humidity + "%");
        $("#day2Temp").text("Temperature: " + response.list[14].main.temp + " degrees F");
        $("#day2Humidity").text("Humidity: " + response.list[14].main.humidity + "%");
        $("#day3Temp").text("Temperature: " + response.list[21].main.temp + " degrees F");
        $("#day3Humidity").text("Humidity: " + response.list[21].main.humidity + "%");
        $("#day4Temp").text("Temperature: " + response.list[28].main.temp + " degrees F");
        $("#day4Humidity").text("Humidity: " + response.list[28].main.humidity + "%");
        $("#day5Temp").text("Temperature: " + response.list[35].main.temp + " degrees F");
        $("#day5Humidity").text("Humidity: " + response.list[35].main.humidity + "%");
    })});

$("#Austin").on("click", function() {
    $.ajax({
      url: AustinWeather,
      method: "GET"
    })
    .then(function(response) {
        console.log(response);
        $("#cityName").html("<h1>" + response.name + "</h1>");
        $("#temperature").text("Temperature: " + response.main.temp + " degrees F");
        $("#humidity").text("Humidity: " + response.main.humidity + "%");
        $("#windSpeed").text("Wind Speed: " + response.wind.speed + " MPH");
        $("#uvIndex").text("UV Index:");
    })});

$("#Austin").on("click", function() {
    $.ajax({
      url: AustinForecast,
      method: "GET"
    })
    .then(function(response) {
        console.log(response);
        $("#day1Temp").text("Temperature: " + response.list[7].main.temp + " degrees F");
        $("#day1Humidity").text("Humidity: " + response.list[7].main.humidity + "%");
        $("#day2Temp").text("Temperature: " + response.list[14].main.temp + " degrees F");
        $("#day2Humidity").text("Humidity: " + response.list[14].main.humidity + "%");
        $("#day3Temp").text("Temperature: " + response.list[21].main.temp + " degrees F");
        $("#day3Humidity").text("Humidity: " + response.list[21].main.humidity + "%");
        $("#day4Temp").text("Temperature: " + response.list[28].main.temp + " degrees F");
        $("#day4Humidity").text("Humidity: " + response.list[28].main.humidity + "%");
        $("#day5Temp").text("Temperature: " + response.list[35].main.temp + " degrees F");
        $("#day5Humidity").text("Humidity: " + response.list[35].main.humidity + "%");
    })});
 
$("#Chicago").on("click", function() {
    $.ajax({
      url: ChicagoWeather,
      method: "GET"
    })
    .then(function(response) {
        console.log(response);
        $("#cityName").html("<h1>" + response.name + "</h1>");
        $("#temperature").text("Temperature: " + response.main.temp + " degrees F");
        $("#humidity").text("Humidity: " + response.main.humidity + "%");
        $("#windSpeed").text("Wind Speed: " + response.wind.speed + " MPH");
        $("#uvIndex").text("UV Index:");
    })});

$("#Chicago").on("click", function() {
    $.ajax({
      url: ChicagoForecast,
      method: "GET"
    })
    .then(function(response) {
        console.log(response);
        $("#day1Temp").text("Temperature: " + response.list[7].main.temp + " degrees F");
        $("#day1Humidity").text("Humidity: " + response.list[7].main.humidity + "%");
        $("#day2Temp").text("Temperature: " + response.list[14].main.temp + " degrees F");
        $("#day2Humidity").text("Humidity: " + response.list[14].main.humidity + "%");
        $("#day3Temp").text("Temperature: " + response.list[21].main.temp + " degrees F");
        $("#day3Humidity").text("Humidity: " + response.list[21].main.humidity + "%");
        $("#day4Temp").text("Temperature: " + response.list[28].main.temp + " degrees F");
        $("#day4Humidity").text("Humidity: " + response.list[28].main.humidity + "%");
        $("#day5Temp").text("Temperature: " + response.list[35].main.temp + " degrees F");
        $("#day5Humidity").text("Humidity: " + response.list[35].main.humidity + "%");
    })});

$("#newYork").on("click", function() {
    $.ajax({
      url: newYorkWeather,
      method: "GET"
    })
    .then(function(response) {
        console.log(response);
        $("#cityName").html("<h1>" + response.name + "</h1>");
        $("#temperature").text("Temperature: " + response.main.temp + " degrees F");
        $("#humidity").text("Humidity: " + response.main.humidity + "%");
        $("#windSpeed").text("Wind Speed: " + response.wind.speed + " MPH");
        $("#uvIndex").text("UV Index:");
    })});

$("#newYork").on("click", function() {
    $.ajax({
      url: newYorkForecast,
      method: "GET"
    })
    .then(function(response) {
        console.log(response);
        $("#day1Temp").text("Temperature: " + response.list[7].main.temp + " degrees F");
        $("#day1Humidity").text("Humidity: " + response.list[7].main.humidity + "%");
        $("#day2Temp").text("Temperature: " + response.list[14].main.temp + " degrees F");
        $("#day2Humidity").text("Humidity: " + response.list[14].main.humidity + "%");
        $("#day3Temp").text("Temperature: " + response.list[21].main.temp + " degrees F");
        $("#day3Humidity").text("Humidity: " + response.list[21].main.humidity + "%");
        $("#day4Temp").text("Temperature: " + response.list[28].main.temp + " degrees F");
        $("#day4Humidity").text("Humidity: " + response.list[28].main.humidity + "%");
        $("#day5Temp").text("Temperature: " + response.list[35].main.temp + " degrees F");
        $("#day5Humidity").text("Humidity: " + response.list[35].main.humidity + "%");
    })});

$("#Orlando").on("click", function() {
    $.ajax({
      url: OrlandoWeather,
      method: "GET"
    })
    .then(function(response) {
        console.log(response);
        $("#cityName").html("<h1>" + response.name + "</h1>");
        $("#temperature").text("Temperature: " + response.main.temp + " degrees F");
        $("#humidity").text("Humidity: " + response.main.humidity + "%");
        $("#windSpeed").text("Wind Speed: " + response.wind.speed + " MPH");
        $("#uvIndex").text("UV Index:");
    })});

$("#Orlando").on("click", function() {
    $.ajax({
      url: OrlandoForecast,
      method: "GET"
    })
    .then(function(response) {
        console.log(response);
        $("#day1Temp").text("Temperature: " + response.list[7].main.temp + " degrees F");
        $("#day1Humidity").text("Humidity: " + response.list[7].main.humidity + "%");
        $("#day2Temp").text("Temperature: " + response.list[14].main.temp + " degrees F");
        $("#day2Humidity").text("Humidity: " + response.list[14].main.humidity + "%");
        $("#day3Temp").text("Temperature: " + response.list[21].main.temp + " degrees F");
        $("#day3Humidity").text("Humidity: " + response.list[21].main.humidity + "%");
        $("#day4Temp").text("Temperature: " + response.list[28].main.temp + " degrees F");
        $("#day4Humidity").text("Humidity: " + response.list[28].main.humidity + "%");
        $("#day5Temp").text("Temperature: " + response.list[35].main.temp + " degrees F");
        $("#day5Humidity").text("Humidity: " + response.list[35].main.humidity + "%");
    })});

$("#sanFrancisco").on("click", function() {
    $.ajax({
      url: sanFranciscoWeather,
      method: "GET"
    })
    .then(function(response) {
        console.log(response);
        $("#cityName").html("<h1>" + response.name + "</h1>");
        $("#temperature").text("Temperature: " + response.main.temp + " degrees F");
        $("#humidity").text("Humidity: " + response.main.humidity + "%");
        $("#windSpeed").text("Wind Speed: " + response.wind.speed + " MPH");
        $("#uvIndex").text("UV Index:");
    })});

$("#sanFrancisco").on("click", function() {
    $.ajax({
      url: sanFranciscoForecast,
      method: "GET"
    })
    .then(function(response) {
        console.log(response);
        $("#day1Temp").text("Temperature: " + response.list[7].main.temp + " degrees F");
        $("#day1Humidity").text("Humidity: " + response.list[7].main.humidity + "%");
        $("#day2Temp").text("Temperature: " + response.list[14].main.temp + " degrees F");
        $("#day2Humidity").text("Humidity: " + response.list[14].main.humidity + "%");
        $("#day3Temp").text("Temperature: " + response.list[21].main.temp + " degrees F");
        $("#day3Humidity").text("Humidity: " + response.list[21].main.humidity + "%");
        $("#day4Temp").text("Temperature: " + response.list[28].main.temp + " degrees F");
        $("#day4Humidity").text("Humidity: " + response.list[28].main.humidity + "%");
        $("#day5Temp").text("Temperature: " + response.list[35].main.temp + " degrees F");
        $("#day5Humidity").text("Humidity: " + response.list[35].main.humidity + "%");
    })});

$("#Seattle").on("click", function() {
    $.ajax({
      url: SeattleWeather,
      method: "GET"
    })
    .then(function(response) {
        console.log(response);
        $("#cityName").html("<h1>" + response.name + "</h1>");
        $("#temperature").text("Temperature: " + response.main.temp + " degrees F");
        $("#humidity").text("Humidity: " + response.main.humidity + "%");
        $("#windSpeed").text("Wind Speed: " + response.wind.speed + " MPH");
        $("#uvIndex").text("UV Index:");
    })});

$("#Seattle").on("click", function() {
    $.ajax({
      url: SeattleForecast,
      method: "GET"
    })
    .then(function(response) {
        console.log(response);
        $("#day1Temp").text("Temperature: " + response.list[7].main.temp + " degrees F");
        $("#day1Humidity").text("Humidity: " + response.list[7].main.humidity + "%");
        $("#day2Temp").text("Temperature: " + response.list[14].main.temp + " degrees F");
        $("#day2Humidity").text("Humidity: " + response.list[14].main.humidity + "%");
        $("#day3Temp").text("Temperature: " + response.list[21].main.temp + " degrees F");
        $("#day3Humidity").text("Humidity: " + response.list[21].main.humidity + "%");
        $("#day4Temp").text("Temperature: " + response.list[28].main.temp + " degrees F");
        $("#day4Humidity").text("Humidity: " + response.list[28].main.humidity + "%");
        $("#day5Temp").text("Temperature: " + response.list[35].main.temp + " degrees F");
        $("#day5Humidity").text("Humidity: " + response.list[35].main.humidity + "%");
    })});

$("#Denver").on("click", function() {
    $.ajax({
      url: DenverWeather,
      method: "GET"
    })
    .then(function(response) {
        console.log(response);
        $("#cityName").html("<h1>" + response.name + "</h1>");
        $("#temperature").text("Temperature: " + response.main.temp + " degrees F");
        $("#humidity").text("Humidity: " + response.main.humidity + "%");
        $("#windSpeed").text("Wind Speed: " + response.wind.speed + " MPH");
        $("#uvIndex").text("UV Index:");
    })});

$("#Denver").on("click", function() {
    $.ajax({
      url: DenverForecast,
      method: "GET"
    })
    .then(function(response) {
        console.log(response);
        $("#day1Temp").text("Temperature: " + response.list[7].main.temp + " degrees F");
        $("#day1Humidity").text("Humidity: " + response.list[7].main.humidity + "%");
        $("#day2Temp").text("Temperature: " + response.list[14].main.temp + " degrees F");
        $("#day2Humidity").text("Humidity: " + response.list[14].main.humidity + "%");
        $("#day3Temp").text("Temperature: " + response.list[21].main.temp + " degrees F");
        $("#day3Humidity").text("Humidity: " + response.list[21].main.humidity + "%");
        $("#day4Temp").text("Temperature: " + response.list[28].main.temp + " degrees F");
        $("#day4Humidity").text("Humidity: " + response.list[28].main.humidity + "%");
        $("#day5Temp").text("Temperature: " + response.list[35].main.temp + " degrees F");
        $("#day5Humidity").text("Humidity: " + response.list[35].main.humidity + "%");
    })});

$("#Atlanta").on("click", function() {
    $.ajax({
      url: AtlantaWeather,
      method: "GET"
    })
    .then(function(response) {
        console.log(response);
        $("#cityName").html("<h1>" + response.name + "</h1>");
        $("#temperature").text("Temperature: " + response.main.temp + " degrees F");
        $("#humidity").text("Humidity: " + response.main.humidity + "%");
        $("#windSpeed").text("Wind Speed: " + response.wind.speed + " MPH");
        $("#uvIndex").text("UV Index:");
    })});

$("#Atlanta").on("click", function() {
    $.ajax({
      url: AtlantaForecast,
      method: "GET"
    })
    .then(function(response) {
        console.log(response);
        $("#day1Temp").text("Temperature: " + response.list[7].main.temp + " degrees F");
        $("#day1Humidity").text("Humidity: " + response.list[7].main.humidity + "%");
        $("#day2Temp").text("Temperature: " + response.list[14].main.temp + " degrees F");
        $("#day2Humidity").text("Humidity: " + response.list[14].main.humidity + "%");
        $("#day3Temp").text("Temperature: " + response.list[21].main.temp + " degrees F");
        $("#day3Humidity").text("Humidity: " + response.list[21].main.humidity + "%");
        $("#day4Temp").text("Temperature: " + response.list[28].main.temp + " degrees F");
        $("#day4Humidity").text("Humidity: " + response.list[28].main.humidity + "%");
        $("#day5Temp").text("Temperature: " + response.list[35].main.temp + " degrees F");
        $("#day5Humidity").text("Humidity: " + response.list[35].main.humidity + "%");
    })});