import React from 'react';
import WeatherPage from '../_components/Weather/WeatherPage';


const App = () => {
    return (
        <div className="container">
            <div className="col-md-8 offset-md-2">
                <WeatherPage></WeatherPage>
            </div>
        </div>
    );
}

export { App };