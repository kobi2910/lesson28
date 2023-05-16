function refreshWether() {
    cityName = ["London", "Jerusalem", "New York"]
    apiKey = "8e6e3c00698e07493402345ddf4c6167"
    urlLondon = `https://api.openweathermap.org/data/2.5/weather?q=${cityName[0]}&appid=${apiKey}`
    urlJerusalem = `https://api.openweathermap.org/data/2.5/weather?q=${cityName[1]}&appid=${apiKey}`
    urlNewYork = `https://api.openweathermap.org/data/2.5/weather?q=${cityName[2]}&appid=${apiKey}`
    fetch(urlLondon)
    .then(Response => Response.json())
    .then(Date => {
        document.getElementById("London").innerText = (Date.main.temp - 273.15).toFixed(0)
    })
    fetch(urlJerusalem)
    .then(Response => Response.json())
    .then(Date => {
        document.getElementById("JRU").innerText = (Date.main.temp - 273.15).toFixed(0)
    })
    fetch(urlNewYork)
    .then(Response => Response.json())
    .then(Date => {
        document.getElementById("NYU").innerText = (Date.main.temp - 273.15).toFixed(0)
    })
}
function refreshWetherByCity() {
    apiKey = "8e6e3c00698e07493402345ddf4c6167"
    city = document.getElementById("citySelector").value
    url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    fetch(url)
    .then(Response => Response.json())
    .then(data => {
        document.getElementById("CityTemp").innerText = (data.main.temp - 273.15).toFixed(0)
    })
    document.getElementById("City").innerText = city
}
refreshIntrval = setInterval(refreshWether, 60*1000)
