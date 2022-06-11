import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';
import styles from './Forecast.module.css';


function Forecast({forecastData}) {

    console.log(forecastData)
    return (
        // <Container fluid >
        //     <Row>
        //         <Col >
        //             <div >
        //                 location : {forecastData.location}
        //             </div>
        //             <div >
        //                 temp : {forecastData.temp}
        //             </div>

        //         </Col>
        //         <Col >
        //             <div >
        //                 {forecastData.feelLike}
        //                 <Row>
        //                     <Col  >
        //                         Feels Like: {forecastData.feelLike}
        //                     </Col>
        //                     <Col  >
        //                         Humid: {forecastData.humid}%
        //                     </Col>
        //                     <Col  >
        //                         Wind Speed: {forecastData.windSpeed} KMH
        //                     </Col>
        //                 </Row>
        //             </div>
        //         </Col>
        //     </Row>
        // </Container>
        <div className={`${styles.container}`} >
                <div className={`${styles.main}`}>
                    <div className={`${styles.left_card}`} style={{justifyContent: 'space-around'}} >
                        <div className={`${styles.card_header}`} >
                            <div>
                                <img src={forecastData.weatherIcon} alt="" />
                            </div>
                            <h2 style={{textTransform:'uppercase'}}>
                                {forecastData.temp}&#176;c
                            </h2>
                        </div>
                        <h2  style={{textTransform:'uppercase'}}>
                            {forecastData.location}
                        </h2>
                    </div>
                </div>
                <div className={`${styles.details}`} >
                    <div className={`${styles.card}`} >
                        <h3>
                            Feels Like
                        </h3>
                        <h3>
                            {forecastData.feelLike}
                        </h3>
                    </div>
                    <div className={`${styles.card}`} >
                        <h3>
                            Humidity
                        </h3>
                        <h3>
                            {forecastData.humid}%
                        </h3>
                    </div>
                    <div className={`${styles.card}`} >
                        <h3>
                            Wind Speed: 
                        </h3>
                        <h3>
                            {forecastData.windSpeed} KMH
                        </h3>
                    </div>
                </div>
        </div>
    );
}

// Forecast.propTypes = {
//     forecast: PropTypes.shape({
//         currentDay: PropTypes.object,
//         currentDayDetails: PropTypes.array,
//         upcomingDays: PropTypes.array,
//     }),
// };

export default Forecast;
