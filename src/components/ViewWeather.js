import React from 'react';

function ViewWeather(props) {

    const transformDate = (dt) => {
        var newDate = new Date(dt * 1000);

        var weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        var monthname = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

        var formattedDate = weekday[newDate.getDay()] + ' '
            + monthname[newDate.getMonth()] + ' '
            + newDate.getDate() + ', ' + newDate.getFullYear()
        return formattedDate.toString();
    }


    return (
        <div className="card py-3 px-3 text-center">
            <h1>Weather Detail</h1>
            <p>{props.selectedWeather.temp.day-273.15} &deg; C</p>
            <p>{new Date(props.selectedWeather.dt).toDateString()}</p>
            <p>{props.selectedWeather.humidity}</p>
            <p>{props.selectedWeather.pressure}</p>
            <p>{(new Date(props.selectedWeather.sunset)).toTimeString()}</p>
            <p>{(new Date(props.selectedWeather.sunrise)).toTimeString()}</p>
        </div>
    )
}

export default ViewWeather;