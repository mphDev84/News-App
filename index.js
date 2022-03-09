import { displayBreakingNewsData } from "./displayBreakingNewsData.js";
import { displayMoreNewsData } from "./displayMoreNewsData.js";
import { displayLocalNewsData } from "./displayLocalNewsData.js";
import { displayWeather } from "./displayWeather.js";
import { displayExchange } from "./displayExchange.js";

//fetch news API data from endpoint (we're doing "Breaking News" for the required parameter):
const myBreakingNewsFetch = ()=> {fetch("https://free-news.p.rapidapi.com/v1/search?q=breaking%20News&lang=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-news.p.rapidapi.com",
		"x-rapidapi-key": "50ec1d7ee6msh459fcfbf83f7285p1812ccjsnc4cb67da2855"
	}
})
.then(response => response.json())
.then(json=>{
    console.log(json);
    console.log(json.articles[0].title);//console test to see if API call works
    displayBreakingNewsData(json);//pass json data to function that displays data
})
.catch(err => {
	console.error(err);
});
};
myBreakingNewsFetch();//call function immediately 

const myMoreNewsFetch = ()=> {fetch("https://free-news.p.rapidapi.com/v1/search?q=More%20News&lang=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-news.p.rapidapi.com",
		"x-rapidapi-key": "50ec1d7ee6msh459fcfbf83f7285p1812ccjsnc4cb67da2855"
	}
})
.then(response => response.json())
.then(json=>{
    console.log(json);
    console.log(json.articles[0].title);//console test to see if API call works
    displayMoreNewsData(json);//pass json data to function that displays data
})
.catch(err => {
	console.error(err);
});
};
//below I have called the function 'myMoreNewsFetch' with a setTimeout function with an argument of 1.5 seconds. 
//this is because I am only allowed to make one API call per second with the free news API from 
//rapidAPI.com. I want to display news data from more than one endpoint, and as a work-around, I need to 
//separate the API calls by time in order to get the data through. 
setTimeout(myMoreNewsFetch, 1500);

//Note that the fetch API below is hard-coded to retrieve local news data for New York City.
//future iterations of this code should allow for a geo-locating API
const myLocalNewsFetch = ()=> {fetch("https://free-news.p.rapidapi.com/v1/search?q=NYC%20News&lang=en", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "free-news.p.rapidapi.com",
		"x-rapidapi-key": "50ec1d7ee6msh459fcfbf83f7285p1812ccjsnc4cb67da2855"
	}
})
.then(response => response.json())
.then(json=>{
    console.log(json);
    console.log(json.articles[0].title);//console test to see if API call works
    displayLocalNewsData(json);//pass json data to function that displays data
})
.catch(err => {
	console.error(err);
});
};
//below I have called the function 'myMoreNewsFetch' with a setTimeout function with an argument of 2.7 seconds. 
//this is because I am only allowed to make one API call per second with the free news API from 
//rapidAPI.com. I want to display news data from more than one endpoint, and as a work-around, I need to 
//separate the API calls by time in order to get the data through. 
setTimeout(myLocalNewsFetch, 2700);

//Note that the fetch API below is hard-coded to retrieve weather data for zip code '11215'.
//future iterations of this code should allow for a geo-locating API
const myWeatherFetch =()=> {fetch("https://weatherapi-com.p.rapidapi.com/current.json?q=11215", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
		"x-rapidapi-key": "50ec1d7ee6msh459fcfbf83f7285p1812ccjsnc4cb67da2855"
	}
})
.then(response => response.json())
.then(json=>{
    console.log(json);
    console.log(json.current.temp_f);//console test to see if API call works
    displayWeather(json);//pass json data to function that displays data
})
.catch(err => {
	console.error(err);
});
};
myWeatherFetch();

const myCurrencyExchangeFetch =()=>{fetch("https://v6.exchangerate-api.com/v6/c73d60d322d55bfd400c11ed/latest/USD", {
	
})
.then(response => response.json())
.then(json=>{
	console.log(json);
	console.log(json.base_code, json.conversion_rates.GBP);
	displayExchange(json);//pass json data to function that displays said data
})
.catch(err => {
	console.error(err);
});
};
myCurrencyExchangeFetch();