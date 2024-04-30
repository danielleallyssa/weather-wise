let locationKey = "";

document.querySelector("button").addEventListener("click", getLocation);
function getLocation() {
  let userInput = document.querySelector("input").value;
  const locationUrl = `https://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=oRTBi9VpaBqXfJaUo4rD1C9YVxChJyAx&q=${userInput}`;

  fetch(locationUrl)
    .then((res) => res.json())
    .then((data) => {
      let city = data[0].EnglishName;
      let state = data[0].AdministrativeArea.EnglishName;
      console.log(city, state);
      getWeather(data[0].Key);
      document.querySelector("h2").textContent = city + ", " + state;
    })
    .catch((err) => {
      console.log(`error ${err}`);
    });
}

function getWeather(location) {
  const weatherUrl = `https://dataservice.accuweather.com/currentconditions/v1/${location}?apikey=oRTBi9VpaBqXfJaUo4rD1C9YVxChJyAx`;
  fetch(weatherUrl)
    .then((res) => res.json())
    .then((data) => {
      console.log(data[0].WeatherText);
      document.querySelector("p").textContent = data[0].WeatherText;
    });
}

function swapDOMcontent(obj) {}
