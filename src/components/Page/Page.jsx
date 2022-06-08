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
    const { isError, isLoading, forecast } = useForecastHook();
    return (
        <>
        <Header />
        <div className={styles.box}>
            {/* Form */}
            {!isLoading && <Form />}
            {/* Error */}
            {isError && <Error />}
            {/* Loader */}
            {isLoading && <Loader />}
            {/* Forecast */}
            {forecast && <Forecast />}
        </div>

        </>
    );
}

export default Page;