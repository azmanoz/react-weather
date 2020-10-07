import React from 'react';
import ListWeather from './ListWeather';
import SearchWeather from './SearchWeather';
import ViewWeather from './ViewWeather';

// Stateful component
class Main extends React.Component {

    // var workouts = [
    //     {
    //         name: "Fibonacci",
    //         difficulty: "easy",
    //         assignee: "Zainol"
    //     }
    // ];

    constructor() {
        super();
        this.state = {
            searchResult: {
                error: null,
                isLoaded: false,
                data: null
            },
            selectedWeather: null
        };
    }

    render() {
        return (
            <div className="container">
                
                <SearchWeather handleSearchClick={this.handleSearchClick} />  

                {/* MUST CHECK IF data IS NOT NULL */}
                {this.state.searchResult.data ?
                <ListWeather searchResult={this.state.searchResult} handleRowClick={this.handleRowClick}/>  :
                <div></div>    
                }

                {
                    // If selectedWeather is not set yet, show nothing
                    this.state.selectedWeather ? 
                        <ViewWeather selectedWeather={this.state.selectedWeather}/> : <div />
                }
            </div>
        )
    }

    handleRowClick = (dt) => {
        console.log("handleRowClick: dt=" + dt);
        let selectedWeather = this.state.searchResult.data.list.filter(weather => {
            return weather.dt === dt
        })[0];
        console.log("selectedWeather=" + JSON.stringify(selectedWeather));
        this.setState({ // This is done async-ly. So the state is not set immediately.
            selectedWeather: selectedWeather
        });

    }

    handleSearchClick = (cityName) => {
        console.log("handleSearchClick: cityName="+ cityName);

        fetch(`https://api.openweathermap.org/data/2.5/forecast/daily?q=${cityName}&cnt=8&appid=9a875f3b663d836442770050455b2fbf`)
            .then(res => res.json())
            .then(
                (result) => {
                    var searchResult = {...this.state.searchResult};
                    searchResult.isLoaded = true;
                    console.log("result=" + JSON.stringify(result));
                    searchResult.data = result;
                    this.setState({searchResult});
                },
                (error) => {
                    console.log(error);
                    var searchResult = {...this.state.searchResult};
                    searchResult.isLoaded = true;
                    searchResult.error = error;
                    this.setState({searchResult});
                }
            );
    }
}

export default Main;