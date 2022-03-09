export const displayWeather = (json)=>{
    const weatherTempF = json.current.temp_f;
    const weatherTempC = json.current.temp_c;
   document.querySelector("#current-tempF").innerHTML+=`${weatherTempF}`;
   document.querySelector("#current-tempC").innerHTML+=`${weatherTempC}`;
};