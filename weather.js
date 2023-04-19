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
 