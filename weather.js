const searchbox= document.querySelector(".search input")
const searchbtn= document.querySelector(".search button")
const weathericon=document.querySelector(".weather-icon")
const apikey="050ddf4632c796585196f167f260d88f"
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q= "

async function checkweather(city){

	const response =await fetch(apiurl+city +`&appid=${apikey}`)
	if(response.status==404){
		document.querySelector(".error").style.display="block"
		document.querySelector(".weather").style.display="none"

	}else {
		let  data = await response.json()
		console.log(data)
		document.querySelector(".city").innerHTML=data.name
		document.querySelector(".temp").innerHTML=Math.round(data.main.temp) +"°c"
		document.querySelector(".humidity").innerHTML=data.main.humidity +"%"
		document.querySelector(".wind").innerHTML=data.wind.speed+"km/h"
		if(data.weather[0].main="clouds"){
			weathericon.src="/images/clouds.png"
	
		}
		else if(data.weather[0].main="clear"){
			weathericon.src="/images/clear.png"
	
		}
		else if(data.weather[0].main="rain"){
			weathericon.src="/images/rain.png"
	
		}
		else if(data.weather[0].main="mist"){
			weathericon.src="/images/rain.png"
	
		}
		else if(data.weather[0].main="drizzle"){
			weathericon.src="/images/drizzle.png"
	
		}
		document.querySelector(".weather").style.display="block"
		document.querySelector(".error").style.display="none"
	}

}
searchbtn.addEventListener("click",()=>{
	checkweather(searchbox.value);
})
async function check(){
	let a="New delhi"
	let b= "Mumbai"
	let c="Bangalore"

	const response1 =await fetch(apiurl+a +`&appid=${apikey}`)
	const response2=await fetch(apiurl+b +`&appid=${apikey}`)
	const response3 =await fetch(apiurl+c +`&appid=${apikey}`)
	
		let  data1 = await response1.json()
		let  data2 = await response2.json()
		let  data3 = await response3.json()
		console.log(data3)
		
		document.getElementById("a1").innerHTML=Math.round(data1.main.temp) +"°c"
		document.getElementById("a2").innerHTML=data1.main.humidity +"%"
		document.getElementById("a3").innerHTML=data1.wind.speed+"km/h"
		document.getElementById("b1").innerHTML=Math.round(data2.main.temp) +"°c"
		document.getElementById("b2").innerHTML=data2.main.humidity + "%"
		document.getElementById("b3").innerHTML=data2.wind.speed +"km/h"
		document.getElementById("p1").innerHTML=Math.round(data3.main.temp) +"°c"
		document.getElementById("p2").innerHTML=data3.main.humidity +"%"
		document.getElementById("p3").innerHTML=data3.wind.speed+"km/h"
}
check()
let cities = ["Delhi", "Mumbai", "Kolkata", "Chennai", "Bangalore", "Hyderabad", "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Surat", "Kanpur", "Nagpur", "Visakhapatnam", "Bhopal", "Patna", "Ludhiana", "Agra", "Nashik", "Vadodara", "Varanasi", "Madurai", "Jamshedpur", "Rajkot", "Allahabad", "Dhanbad", "Amritsar", "Raipur", "Jabalpur", "Coimbatore", "Kochi", "Jodhpur", "Guwahati", "Gwalior", "Vijayawada", "Thiruvananthapuram", "Hubli-Dharwad", "Bhubaneswar", "Salem", "Dehradun", "Tokyo", "Paris", "London", "New York City", "Singapore", "Dubai", "Rome", "Los Angeles", "Barcelona", "Amsterdam", "Hong Kong", "Bangkok", "Sydney", "Berlin", "Istanbul", "San Francisco", "Vienna", "Munich", "Zurich", "Vancouver"];


// Get the input field and suggestion list
const input = document.getElementById("input");
const suggestionList = document.getElementById("suggestion-list");



// Function to filter the city list based on the search query
function filterCities(query) {
  return cities.filter(city => city.toLowerCase().startsWith(query.toLowerCase()));
}

// Function to update the suggestion list with filtered cities
function updateSuggestions(query) {
  const filteredCities = filterCities(query);
  suggestionList.innerHTML = "";
  filteredCities.forEach(city => {
    const li = document.createElement("li");
    li.textContent = city;
    li.addEventListener("click", () => {
      input.value = city;
      suggestionList.innerHTML = "";
    });
    suggestionList.appendChild(li);
  });
}

// Event listener to update suggestions when input changes
input.addEventListener("input", () => {
  updateSuggestions(input.value);
});
