import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

function Form({submitSearch}) {

    const [location, setLocation] = React.useState('');

    const handleChange = (e) => {
        setLocation(e.target.value);
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        if(!location || location === '') return;

        submitSearch(location);
       
    }

    return (
        <form onSubmit={handleSubmit} className={styles.inputForm}  >
            <input 
                type="text" 
                aria-label='location'
                className={styles.input}
                placeholder='Enter a location'
                value={location}
                onChange={handleChange}
                required
            />
            <button 
                type='submit' 
                className={styles.button}
                onClick={handleSubmit} 
            >
                SEARCH
            </button>
        </form>
    );
}

Form.propTypes = {
    submitSearch : PropTypes.func.isRequired
}

export default Form;