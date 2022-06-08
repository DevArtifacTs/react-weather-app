import { useState } from "react";

const useForecastHook = () => {
    console.log('useForecastHook');

    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [forecast, setForecast] = useState(false);

    // call the api
    const submitRequest = location => {
        console.log({location});
    }

    return {
        isError, 
        isLoading, 
        forecast,
        submitRequest,
    }
}

export default useForecastHook;