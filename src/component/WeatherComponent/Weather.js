import React, { Component } from "react";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import classes from "./Weather.module.css";

const WEATHERAPI = process.env.REACT_APP_OPENWEATHER_API;

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: null,
      name: null,
      long: null,
      lat: null,
      icon: null,
      weather: null,
      sunrise: null,
      sunset: null,
    };
  }

  componentDidMount() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=Barbados&appid=${WEATHERAPI}`
      )
      .then((response) => {
        this.setState({
          response: true,
          name: response.data.name,
          long: response.data.coord.lon,
          lat: response.data.coord.lat,
          icon: response.data.weather[0].icon,
          weather: response.data.weather[0].description,
          sunrise: response.data.sys.sunrise,
          sunset: response.data.sys.sunset,
        });
        console.log(this.state.icon);
      })
      .catch((error) => {
        this.setState({ repsonse: false });
        let errorMessage = error;
        console.log(errorMessage);
      });
  }

  getDateHandler = (value) => {
    let date = new Date(value * 1000);
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let seconds = "0" + date.getSeconds();

    return hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
  };

  render() {
    let name = this.state.name;
    let long = this.state.long;
    let lat = this.state.lat;
    let icon = this.state.icon;
    let description = this.state.weather;
    let sunrise = this.getDateHandler(this.state.sunrise);
    let sunset = this.getDateHandler(this.state.sunset);

    return this.state.response ? (
      <React.Fragment>
        <h1>{name}</h1>
        <img
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="Local weather icon"
          width="150px"
        />
        <h3>{description}</h3>
        <div className={classes.Weather}>
          <div className={classes.Weather_Component}>LONGITUDE:{long}</div>
          <div className={classes.Weather_Component}>LATITUDE:{lat}</div>
        </div>
        <div className={classes.Time_Component}>Sunrise: {sunrise} a.m</div>
        <div className={classes.Time_Component}>Sunset : {sunset} p.m</div>
      </React.Fragment>
    ) : (
      <CircularProgress />
    );
  }
}

export default Weather;
