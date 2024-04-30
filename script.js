const url = "http://dataservice.accuweather.com/currentconditions/v1/";

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(`error ${err}`);
  });
