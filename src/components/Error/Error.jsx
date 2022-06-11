import React, {useState} from 'react';
import PropTypes from 'prop-types';

import styles from './Error.module.css';



const Error = ({ message, setIsError, setIsLoading }) => {
    
    const handleClick = () => {
        setIsError(false);
        setIsLoading(false);
    }
    
    return (
        <>
            <div className={`${styles.error}`} role="alert">
                <button onClick={handleClick}>RESET</button>
                {message}
            </div>
        </>
    )
};

Error.propTypes = {
    message: PropTypes.string,
};

Error.defaultProps = {
    message: 'An error occurred',
};

export default Error;