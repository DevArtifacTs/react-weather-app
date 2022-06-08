import { useState } from "react";

const useForecastHook = () => {
    console.log('useForecastHook');

    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [forecast, setForecast] = useState(false);

    return {
        isError, 
        isLoading, 
        forecast,
    }
}

export default useForecastHook;