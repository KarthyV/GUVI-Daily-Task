let cardDiv = document.querySelector("#card");
let ul = document.querySelector("#list");

var url = "https://restcountries.com/v3.1/all";

const countryDetails = async function (url) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  data.forEach((country) => card(country));
};
countryDetails(url);

const card = function (data) {
  let [lat, lng] = data.latlng;
  let html = `
  <div class="col-lg-3 col-md-6 col-sm-12 deck">
    <div class="card shadow-lg p-3 mb-5 bg-white rounded" style="width: 18rem;">
     <img src="${data.flags.png}" class="card-img-top" alt="${
    data.name.common
  }">
     <div class="card-body">
      <h5 class="card-title">${data.name.common}</h5>
     </div>
     <ul id="list" class="list-group list-group-flush">
      <li class="list-group-item">Capital : ${data.capital}</li>
      <li class="list-group-item">Region : ${data.region}</li>
      <li class="list-group-item">Latitude : ${lat.toFixed(
        1
      )}  <b>|</b>  Longitude : ${lng.toFixed(1)}</li>
      <li class="list-group-item">Country Codes : ${data.cca3}</li>
      </ul>
    </div>
  </div>`;
  cardDiv.insertAdjacentHTML("afterbegin", html);

  // Tried openweather API but not able to add the same to the cards

  // const apiKey = "c413201d2d5bcf5cf3a2b4216ed65c75";
  // const url1 = `https://api.openweathermap.org/data/2.5/weather?q=${data.name.common}&units=celcius&appid=${apiKey}`;
  // let res = fetch(url1)
  //   .then((res) => res.json())
  //   .then((data) => {
  //     let description = data.weather[0].description;
  //     h2 = `<h5 class="card-title">${description}</h5>`;
  //     document.querySelector(".rounded").insertAdjacentHTML("beforeend", h2);
  //     console.log(description);
  //   });
};
