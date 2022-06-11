import React, {useEffect} from 'react';

// components
import Header from '../Header/Header';
import Form from '../Form/Form';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import Forecast from '../Forecast/Forecast';

//style
import styles from './Page.module.css';

// hooks
import useForecastHook from '../../hooks/useForecast';

function Page(props) {
    const { isError, isLoading, forecast, submitRequest } = useForecastHook();

    const handleSubmit = value => {
        // console.log({value});
        submitRequest(value);
    }

    useEffect(()=>{
        console.log('forecast', forecast)
    }, [isError, isLoading, forecast])

    return (
        <>
        <div className='bg-image'></div>
        <Header />
        <div className={`${styles.box} ${styles.box_bg_img}`}>
            <>
                {/* Form */}
                {!isLoading && <Form submitSearch={handleSubmit} />}
                {/* Error */}
                {isError && <Error message={isError} />}
                {/* Loader */}
                {/* if isLoading then render <Loader/> component */}
                {isLoading && <Loader />}
            </>
        </div>

        {/* Forecast */}
        <div className={`${styles.box}`}>
                {!forecast ?
                    <h3>Search to display weather data</h3>
                    :
                    <Forecast forecastData = {forecast} />
                }
            </div>

        </>
    );
}

export default Page;