let selectBox = document.querySelector(".selectBox");

let result = document.querySelector(".result");

// const countryApi = `https://rapidapi.com/api-sports/api/covid-193/`;

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b5727596e5msh01a373f182475bdp173750jsnb797428e7af0",
    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  },
};

fetch("https://covid-193.p.rapidapi.com/countries", options)
  .then((response) => response.json())
  .then((data) => {
    let countries = data.response;
    for (country in countries) {
      selectBox.innerHTML += `<option>${countries[country]}</option>`;
    }
  })
  .catch((err) => console.error(err));

const option = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b5727596e5msh01a373f182475bdp173750jsnb797428e7af0",
    "X-RapidAPI-Host": "covid-193.p.rapidapi.com",
  },
};

fetch("https://covid-193.p.rapidapi.com/statistics", option)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
