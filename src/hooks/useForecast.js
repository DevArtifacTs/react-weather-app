import { useState } from "react";
import axios from 'axios';

import getCurrentForecast from "../helpers/getCurrentForecast";

// const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/onecall';
const ALTER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const LAT_LONG_URL = 'http://api.openweathermap.org/geo/1.0/direct';
// const API_KEY = process.env.REACT_APP_API_KEY
const API_KEY = 'cde3993cbe012d67a44a7518e13b172c'
const REQUEST_URL =`${BASE_URL}`;

const useForecastHook = () => {
    // console.log('useForecastHook');

    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [forecast, setForecast] = useState(false);
    const [ErrorResetButton, setErrorResetButton] = useState(false);
    
    // gather all data and return
    const gatherForecastData =  (data, location) => {
        // current weather
        const current =  getCurrentForecast(data, location);
        return current
    }

    const getCurrentForecastByName = async city => {
        let response

        try {
            response = await axios.get(`${ALTER_URL}`, {params : {q : city, units : 'metric', appid : API_KEY}})

        } catch(err) {
            //set error reset button
            setErrorResetButton(true);
            //set Error Meassage
            setIsError('there is no such a location!');
            // clear previous forecast data
            setForecast(false);
            console.log('err: ', err);
        }

        return response.data ;
    }
    

    // call the api
    const submitRequest = async location => {
        setIsLoading(true);
        setIsError(false);

        const currentDataForecast = await getCurrentForecastByName(location);
        if(currentDataForecast === undefined){
            console.log('there is no currentDataForecast')
            setIsLoading(false);

        }
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