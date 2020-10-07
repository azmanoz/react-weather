import React from 'react';

// Stateless component
function ListWeather(props) {

    const transformDate = (dt) => {
        var newDate = new Date(dt * 1000);

        var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var monthname = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        var formattedDate = weekday[newDate.getDay()] + ' '
            + monthname[newDate.getMonth()] + ' '
            + newDate.getDate() + ', ' + newDate.getFullYear()
        return formattedDate.toString();
    }

    const handleRowClick = (dt) => {
        props.handleRowClick(dt);
    }

    return (
        <div>
            <h2>8-day Forecast</h2>
            <table className="table table-bordered table-hover table-striped">
                <thead className="bg-info">
                    <tr>
                        <th>Weather</th>
                        <th>Date</th>
                        <th>Temperature</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.searchResult.data.list.map(weather => {
                            return (

                                <tr key={weather.dt} onClick={() => handleRowClick(weather.dt)}>
                                    {/* onClick={handleRowClick} will be called upon loading of this component, which we do NOT want to happen!!! */}

                                    <td>{weather.weather[0].main} <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} width="40" height="40" alt="" /></td>
                                    <td>{transformDate(weather.dt)}</td>
                                    <td>{(weather.temp.day - 273.15).toFixed(0)} &deg; C</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    );

}

export default ListWeather;