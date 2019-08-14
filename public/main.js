let city = document.querySelector('#typedCity')


const createProperSearch = () => {
  const typedCity = city.value
  const url = 'https://api.openweathermap.org/data/2.5/weather'
  const apiKey = '6ea45fb71cd9bf02b74216acfd6fb476'
  let search = typedCity
  const newUrl = url + '?' + 'q=' + search + '&appid=' + apiKey
  console.log(newUrl)
  return newUrl
}
const getWeatherAndTemp = () => {
  fetch(createProperSearch())
    .then(resp => {
      return resp.json()
    })
    .then(city => {
      console.log(city)
      document.querySelector('.weather').textContent = city.weather[0].main
      document.querySelector('.city').textContent = city.main.temp
    })

}
document.querySelector('.search').addEventListener('click', getWeatherAndTemp)