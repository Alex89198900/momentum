const weatherBlock=document.querySelector('.weather')

let city=prompt("enter city")
async function loadWeather(e){
    
const server =`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=a2f82d62c7a5f2288456f64354ad1cd3`
const response=await fetch(server,{
    method: 'GET'
})

const responseResult=await response.json();
if(response.ok){
    getWeather(responseResult)
}else{
    weatherBlock.innerHTML=responseResult.message;
}
}


function getWeather(data){
    console.log(data)
    const location=data.name;
    const temp = Math.round(data.main.temp);
    const feelslike= Math.round(data.main.feels_like);
    const weatherStatus= data.weather[0].main;
    const weatherIcon= data.weather[0].icon;

    const template=` <div class="weather__header">
    <div class="weather__main">
        <div class="weather__city">${location}</div>
        <div class="weather__status">${weatherStatus}</div>
    </div>
    <div class="weather__icon">
        <img src="https://api.openweathermap.org/img/w/${weatherIcon}.png" alt="${weatherStatus}" class="weather__icon1">
    </div>
    <div class="weather__temp">Feels: ${temp}</div>
    <div class="weather__feels-like">Feels like: ${feelslike}</div>
</div>`

weatherBlock.innerHTML=template
}

if(weatherBlock){
    loadWeather()
}