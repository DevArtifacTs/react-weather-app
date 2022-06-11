import { useState } from "react";
import axios from 'axios';

import getCurrentForecast from "../helpers/getCurrentForecast";

// const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/onecall';
const ALTER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const LAT_LONG_URL = 'http://api.openweathermap.org/geo/1.0/direct';
const API_KEY = 'cde3993cbe012d67a44a7518e13b172c'
const REQUEST_URL =`${BASE_URL}`;

const useForecastHook = () => {
    console.log('useForecastHook');

    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [forecast, setForecast] = useState(false);
    const [ErrorResetButton, setErrorResetButton] = useState(false);
    
    //1.get lat and long by enter city name 
    // const getLatLong = async (cityName) => {
    //     const {data} = await axios.get(`${LAT_LONG_URL}?q=${cityName}&limit=5&appid=${API_KEY}`);
        
    //     if(!data || data.length === 0){
    //         setIsError('There is no such a location')
    //     }
    //     return {    lat: data[0].lat, 
    //                 lon: data[0].lon
    //             };
    // }

    //2.get forecast by lat and long
    // const getForecast = async (lat, lon, exclude) => {
    //     const {data} = await axios.get(`${BASE_URL}`, {params : {lat : lat, lon : lon, exclude : exclude, units : 'metric', appid : API_KEY}});
    //     console.log('foreast: ', data);
    //     return data;
    // }

    //extract for current, next 4 hours

    // gather all data and return
    const gatherForecastData =  (data, location) => {
        // current weather
        const current =  getCurrentForecast(data, location);
        console.log('current: ', current);
        return current
    }


    // const getCurrentDataForecast = async (lat, lon) => {
    //     const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
    //     return data;
    // }

    const getCurrentForecastByName = async city => {
        let response

        try {
            response = await axios.get(`${ALTER_URL}`, {params : {q : city, units : 'metric', appid : API_KEY}})

        } catch(err) {
            //set error reset button
            setErrorResetButton(true);
            //set Error Meassage
            setIsError('there is no such a location!');
            console.log('err: ', err);
        }

        return response.data ;
    }
    

    // call the api
    const submitRequest = async location => {
        setIsLoading(true);
        setIsError(false);

        // const {lat, lon} = await getLatLong(location);
        // console.log ('location: ', location, 'lat: ', lat, 'lon: ', lon);

        // const currentForecast = await getForecast(lat, lon, 'current');
        // const currentDataForecast = await getCurrentDataForecast(lat, lon);
        const currentDataForecast = await getCurrentForecastByName(location);
        console.log('handle error', currentDataForecast.message);
        console.log('currentDataForecast: ', currentDataForecast);

        if(currentDataForecast === undefined){
            console.log('there is no currentDataForecast')
            setIsLoading(false);

        }

        // gatherForecastData(currentForecast, location)
        setForecast( gatherForecastData(currentDataForecast, location))
        setIsLoading(false);

        
    }


    return {
        isError, 
        isLoading, 
        forecast,
        ErrorResetButton,
        setIsError,
        setIsLoading,
        submitRequest,
    }
}

export default useForecastHook;