// PROMISE
// document.querySelector("button").addEventListener("click", getLocation);
// function getLocation() {
//   let userInput = document.querySelector("input").value;
//   const locationUrl = `https://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=oRTBi9VpaBqXfJaUo4rD1C9YVxChJyAx&q=${userInput}`;

//   fetch(locationUrl)
//     .then((res) => res.json())
//     .then((data) => {
//       let city = data[0].EnglishName;
//       let state = data[0].AdministrativeArea.EnglishName;
//       console.log(city, state);
//       getWeather(data[0].Key);
//       document.querySelector("h2").textContent = city + ", " + state;
//     })
//     .catch((err) => {
//       console.log(`error ${err}`);
//     });
// }

// ASYNC AWAIT
document.querySelector("button").addEventListener("click", getLocation);

async function getLocation() {
  let userInput = document.querySelector("input").value;
  try {
    const locationUrl = `https://dataservice.accuweather.com/locations/v1/postalcodes/search?apikey=oRTBi9VpaBqXfJaUo4rD1C9YVxChJyAx&q=${userInput}`,
      res = await fetch(locationUrl),
      data = await res.json(),
      city = data[0].EnglishName,
      state = data[0].AdministrativeArea.EnglishName,
      locationKey = data[0].Key,
      locationConditons = await getWeather(locationKey);

    console.log(city, state, locationConditons);
    swapDOMcontent(city, state, locationConditons);
  } catch (err) {
    console.log(err);
  }
}

async function getWeather(location) {
  try {
    const weatherUrl = `https://dataservice.accuweather.com/currentconditions/v1/${location}?apikey=oRTBi9VpaBqXfJaUo4rD1C9YVxChJyAx`,
      res = await fetch(weatherUrl),
      data = await res.json(),
      conditions = data[0].WeatherText;
    return conditions;
  } catch (err) {
    console.log(err);
  }
}

function swapDOMcontent(city, state, conditions) {
  document.querySelector("p").textContent = conditions;
  document.querySelector("h2").textContent = city + ", " + state;
}
