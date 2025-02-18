let params = {
    country: "SA",
    city: "Makkah al Mukarramah"
}
axios.get('http://api.aladhan.com/v1/timingsByCity', {
    params: params
})
.then(function(response) {
    console.log(response.data.data)
})
.catch(function(error){
    console.log(error)
})