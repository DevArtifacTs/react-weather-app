import React from 'react';

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
        console.log({value});
        submitRequest(value);
    }

    return (
        <>
        <Header />
        <div className={styles.box}>
            {/* Form */}
            {!isLoading && <Form submitSearch={handleSubmit} />}
            {/* Error */}
            {isError && <Error />}
            {/* Loader */}
            {/* if isLoading then render <Loader/> component */}
            {isLoading && <Loader />}
            {/* Forecast */}
            {forecast && <Forecast />}
        </div>

        </>
    );
}

export default Page;