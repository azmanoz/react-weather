import React from 'react';

// Stateful component
class SearchWeather extends React.Component {

    constructor(props) {
        super();

        // To create form:
        // 1) Create states/vars based on the number of inputs u have
        this.state = {
            cityName: ''
        }
    }

    render() {
        return (
            <div className="my-5 card py-5 px-5">
                <h1>Search Weather</h1>
                <div className="mb-3">

                    {/* 
                        2) For each input, link it to the state through value attributes 
                        3) Apply onChange method for each input
                    */}
                    {/* <label htmlFor="exampleFormControlInput1" className="form-label">Exercise Name</label> */}
                    <div className="input-group mb-3">
                        <input value={this.state.cityName} name="cityName" onChange={this.handleChange} type="text" className="form-control" placeholder="Search city" aria-label="Search city" aria-describedby="basic-addon2" />
                        <button className="btn btn-primary" id="basic-addon2" onClick={this.handleSearchClick}>Search</button>
                    </div>
                </div>
            </div>
        );
    }

    handleChange = (e) => {

        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    handleSearchClick = () => {
        this.props.handleSearchClick(this.state.cityName);
    }
}

export default SearchWeather;