const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "47dd9ff026msha6bcfad10b71528p101e29jsn5932ba9fd6a5",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      // cloud_pct.innerHTML = response.cloud_pct
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Patna");

$(".change").on("click", function () {
  if ($("body").hasClass("dark")) {
    $("body").removeClass("dark");
    $(".change").text("OFF");
  } else {
    $("body").addClass("dark");
    $(".change").text("ON");
  }
});

const Shangai = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      shanghai_cloud_pct.innerHTML = response.cloud_pct;
      shanghai_temp.innerHTML = response.temp;
      shanghai_feels_like.innerHTML = response.feels_like;
      shanghai_humidity.innerHTML = response.humidity;
      shanghai_min_temp.innerHTML = response.min_temp;
      shanghai_max_temp.innerHTML = response.max_temp;
      shanghai_wind_speed.innerHTML = response.wind_speed;
      shanghai_wind_degrees.innerHTML = response.wind_degrees;
      shanghai_sunrise.innerHTML = response.sunrise;
      shanghai_sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
Shangai("Shangai");

const Boston = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      Boston_cloud_pct.innerHTML = response.cloud_pct;
      Boston_temp.innerHTML = response.temp;
      Boston_feels_like.innerHTML = response.feels_like;
      Boston_humidity.innerHTML = response.humidity;
      Boston_min_temp.innerHTML = response.min_temp;
      Boston_max_temp.innerHTML = response.max_temp;
      Boston_wind_speed.innerHTML = response.wind_speed;
      Boston_wind_degrees.innerHTML = response.wind_degrees;
      Boston_sunrise.innerHTML = response.sunrise;
      Boston_sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

const Lucknow = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      Lucknow_cloud_pct.innerHTML = response.cloud_pct;
      Lucknow_temp.innerHTML = response.temp;
      Lucknow_feels_like.innerHTML = response.feels_like;
      Lucknow_humidity.innerHTML = response.humidity;
      Lucknow_min_temp.innerHTML = response.min_temp;
      Lucknow_max_temp.innerHTML = response.max_temp;
      Lucknow_wind_speed.innerHTML = response.wind_speed;
      Lucknow_wind_degrees.innerHTML = response.wind_degrees;
      Lucknow_sunrise.innerHTML = response.sunrise;
      Lucknow_sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

const Kolkata = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      Kolkata_cloud_pct.innerHTML = response.cloud_pct;
      Kolkata_temp.innerHTML = response.temp;
      Kolkata_feels_like.innerHTML = response.feels_like;
      Kolkata_humidity.innerHTML = response.humidity;
      Kolkata_min_temp.innerHTML = response.min_temp;
      Kolkata_max_temp.innerHTML = response.max_temp;
      Kolkata_wind_speed.innerHTML = response.wind_speed;
      Kolkata_wind_degrees.innerHTML = response.wind_degrees;
      Kolkata_sunrise.innerHTML = response.sunrise;
      Kolkata_sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
Boston("Boston");
Lucknow("Lucknow");
Kolkata("Kolkata");
getWeather("Patna");
