import moment from 'moment';

const getCurrentForecast = (data, location ) => ({
            weekday : moment(data.dt).format('dddd'),
            date : moment(data.dt).format("MMM Do YY"),
            location : location,
            temp : Math.round(data.main.temp),
            // tempMax : Math.round(data.main.temp_max),
            // tempMin : Math.round(data.main.temp_min),
            humid : data.main.humidity,
            feelLike : data.main.feels_like,
            windSpeed : data.wind.speed,
            weatherIcon : `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
            weatherDescription : data.weather[0].description,
 })

 export default getCurrentForecast;