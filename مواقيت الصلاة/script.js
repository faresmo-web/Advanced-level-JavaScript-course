
let cities = [
    {
        arabicName: "القاهرة",
        name: "Al Qāhirah"
    },
    {
        arabicName: "الاسكندرية",
        name: "Al Iskandarīyah"
    },
    {
        arabicName: "طنطا",
        name: "Al Gharbīyah"
    },
    {
        arabicName: "الاسماعلية",
        name: "Al Ismā'īlīyah"
    },
    {
        arabicName: "اسوان",
        name: "Aswān"
    }
    // "القاهرة", "الاسكندرية", "طنطا",  "الاسماعلية", "اسوان"
]
for (let city of cities){
    const content = `
        <option>${city.arabicName}</option>
    `
    document.getElementById("cities-select").innerHTML += content 
}

document.getElementById("cities-select").addEventListener("change", function() {
    document.getElementById("city-name").innerHTML = this.value
    let cityName = ""
    for(let city of cities){
        if(city.arabicName == this.value){
            cityName = city.name
        }
    }
    getPrayersTimingsOfCity(cityName)
    console.log(this.value)
})

function getPrayersTimingsOfCity(cityName){
    let params = { 
        country: "EG",
        city: cityName   //"Al Qāhirah"
    }
    axios.get('http://api.aladhan.com/v1/timingsByCity', {
        params: params
    })
    .then(function(response) {
        const timings = response.data.data.timings
    
        fillTimeForPrayer("fajr-time", timings.Fajr)
        fillTimeForPrayer("sunrise-time", timings.Sunrise)
        fillTimeForPrayer("dhurh-time", timings.Dhuhr)
        fillTimeForPrayer("asr-time", timings.Asr)
        fillTimeForPrayer("sunse-time", timings.Sunset)
        fillTimeForPrayer("isha-time", timings.Isha)
    
        const readableDate = response.data.data.date.readable
        const weekday = response.data.data.date.hijri.weekday.ar
        const date = weekday + " " + readableDate
        document.getElementById("date").innerHTML = date
        console.log(weekday + " " + readableDate)
    })
    .catch(function(error){
        console.log(error)
    })
}

getPrayersTimingsOfCity("Al Qāhirah")

function fillTimeForPrayer(id, time){
    document.getElementById(id).innerHTML = time
}