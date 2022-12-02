"use strict";

let searchWeather = document.getElementById("searchWeather");
let searchBtn = document.getElementById("searchBtn");
let threeDaysDeg = document.getElementById("threeDaysDeg");
let searchAlert = document.getElementById("searchAlert");

let weatherDetails = [];

let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thuresday",
  "Friday",
  "Saturday",
];
let date = new Date();
let today = weekDays[date.getDay()];
var tomorrow = weekDays[(date.getDay() +1 ) % 7];
var afterTomorrow = weekDays[(date.getDay() +2 ) % 7];
console.log((date.getDay() +2 ) % 6);


let month = date.toLocaleString("default", { month: "long" });

async function getWeatherDetails() {
  let response = await fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=456e242a29fb496fb81220931222511&q=" +
      searchWeather.value +
      "&days=3"
  );
  weatherDetails = await response.json();

  var weatherDetailsItems = `
            <div class="col-md-4 text-center ">

          <div class="degpart pb-2 radius-10">
          <div class="Day pb-2 fw-bold d-flex justify-content-between px-4 pt-2 d-block degHeader border-top"> 
          <p  class=""> ${today} </p>
          <p> ${date.getDate()} ${month} </p>
          
          </div>

         <div class="d-flex justify-content-between fw-bold ps-3 pt-2">  
         <p class="text-center pe-4 fs-3  textShadow" > ${
           weatherDetails.location.name
         } </p> 
         </div>
         <div class="d-flex justify-content-around " >   
           <h2 class="text-center fw-bolder fontBig ps-3">${
             weatherDetails.forecast.forecastday[0].day.maxtemp_c
           }°C </h2>
         <img src=' ${
           "https://" +
           weatherDetails.forecast.forecastday[0].day.condition.icon
         } 'style="width: 100px; height:100px ;" class="pe-2" />
           </div>
          <h6 class="text-center conditionTxt" > ${
            weatherDetails.forecast.forecastday[0].day.condition.text
          } </h6>
          </div>
        </div>
    

    <div class="col-md-4 text-center">
    <div class="degpart pb-5 radius-10">
      <div class="Day pb-2 fw-bold px-4 pt-2 d-block degHeader border-top "> 
          <p > ${tomorrow} </p>    
          </div>
          <div>
                <img src=' ${
                  "https://" +
                  weatherDetails.forecast.forecastday[1].day.condition.icon
                } 'style="width: 70px; height:70px ;" />

          <p class="fw-bolder fs-4 " >  ${
            weatherDetails.forecast.forecastday[1].day.maxtemp_c
          }°C
           </p>

          <h6 class="text-center" > ${
            weatherDetails.forecast.forecastday[1].day.condition.text
          } </h6>
          </div>
        </div>
</div>
    
          <div class="col-md-4 text-center">
          <div class="degpart pb-5 radius-10" > 
            <div class="Day pb-2 fw-bold px-4 pt-2 d-block degHeader border-top "> 
          <p > ${afterTomorrow} </p>    
          </div>
          <div>
         <img src=' ${
           "https://" +
           weatherDetails.forecast.forecastday[2].day.condition.icon
         } 'style="width: 70px; height:70px ;" />

          <p class="fw-bolder fs-4 " > ${
            weatherDetails.forecast.forecastday[2].day.maxtemp_c
          }°C </p>

          <h6  > ${
            weatherDetails.forecast.forecastday[2].day.condition.text
          } </h6>
          </div>
          </div>
        </div>
    `;
  threeDaysDeg.innerHTML = weatherDetailsItems;
}

async function getWeatherOfEgypt() {
  let response = await fetch(
    "https://api.weatherapi.com/v1/forecast.json?key=456e242a29fb496fb81220931222511&q=cairo&days=3"
  );
  weatherDetails = await response.json();

  var weatherDetailsItems = `
            <div class="col-md-4 text-center ">

          <div class="degpart pb-2 radius-10">
          <div class="Day pb-2 fw-bold d-flex justify-content-between px-4 pt-2 d-block degHeader border-top"> 
          <p  class=""> ${today} </p>
          <p> ${date.getDate()} ${month} </p>
          
          </div>

         <div class="d-flex justify-content-between fw-bold ps-3 pt-2">  
         <p class="text-center pe-4 fs-3  textShadow" > ${
           weatherDetails.location.name
         } </p> 
         </div>
         <div class="d-flex justify-content-around " >   
           <h2 class="text-center fw-bolder fontBig ps-3">${
             weatherDetails.forecast.forecastday[0].day.maxtemp_c
           }°C </h2>
         <img src=' ${
           "https://" +
           weatherDetails.forecast.forecastday[0].day.condition.icon
         } 'style="width: 100px; height:100px ;" class="pe-2" />
           </div>
          <h6 class="text-center conditionTxt" > ${
            weatherDetails.forecast.forecastday[0].day.condition.text
          } </h6>
          </div>
        </div>
    

    <div class="col-md-4 text-center">
    <div class="degpart pb-5 radius-10">
      <div class="Day pb-2 fw-bold px-4 pt-2 d-block degHeader border-top "> 
          <p > ${tomorrow} </p>    
          </div>
          <div>
                <img src=' ${
                  "https://" +
                  weatherDetails.forecast.forecastday[1].day.condition.icon
                } 'style="width: 70px; height:70px ;" />

          <p class="fw-bolder fs-4 " >  ${
            weatherDetails.forecast.forecastday[1].day.maxtemp_c
          }°C
           </p>

          <h6 class="text-center" > ${
            weatherDetails.forecast.forecastday[1].day.condition.text
          } </h6>
          </div>
        </div>
</div>
    
          <div class="col-md-4 text-center">
          <div class="degpart pb-5 radius-10" > 
            <div class="Day pb-2 fw-bold px-4 pt-2 d-block degHeader border-top "> 
          <p > ${afterTomorrow} </p>    
          </div>
          <div>
         <img src=' ${
           "https://" +
           weatherDetails.forecast.forecastday[2].day.condition.icon
         } 'style="width: 70px; height:70px ;" />

          <p class="fw-bolder fs-4 " > ${
            weatherDetails.forecast.forecastday[2].day.maxtemp_c
          }°C </p>

          <h6  > ${
            weatherDetails.forecast.forecastday[2].day.condition.text
          } </h6>
          </div>
          </div>
        </div>
    `;
  threeDaysDeg.innerHTML = weatherDetailsItems;
}

getWeatherOfEgypt();

searchWeather.onkeyup = function () {
  var searchRejex = /^[a-zA-Z- ]{3,25}$/;
  if (searchRejex.test(searchWeather.value)) {
    getWeatherDetails();
  }
}
// console.log(date.getDay());
// if (date.getDay() >= 0 && date.getDay() < 6) {
//   tomorrow = weekDays[date.getDay() + 1];
//   afterTomorrow = weekDays[date.getDay() + 2];
// }