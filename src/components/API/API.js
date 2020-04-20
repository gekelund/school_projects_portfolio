import React from 'react';

class Api extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            temp: [],
            wind: []
        };
    }

    componentDidMount() {
        fetch("http://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec&units=metric")
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    isLoaded: true,
                    temp: data.main.temp,
                    wind: data.wind.speed
                });
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { temp, wind, isLoaded, error } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    <h4>Stockholm</h4>
                    <p>Temp: {temp} celsius</p>
                    <p>Wind speed: {wind} m/s</p>
                </div>
            )
        }
    }
}


export default Api;