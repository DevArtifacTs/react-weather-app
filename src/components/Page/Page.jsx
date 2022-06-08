import React from 'react';

// components
import Header from '../Header/Header';
import Form from '../Form/Form';
import Error from '../Error/Error';
import Loader from '../Loader/Loader';
import Forecast from '../Forecast/Forecast';

//style
import styles from './Page.module.css';

function Page(props) {
    return (
        <>
         <Header />
         <div className={styles.box}>
             {/* Form */}
             <Form />
             {/* Error */}
             <Error />
             {/* Loader */}
             <Loader />
             {/* Forecast */}
             <Forecast />

         </div>

        </>
    );
}

export default Page;