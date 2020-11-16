import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import WeatherComponent from "../../component/WeatherComponent/Weather";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(3),
      padding: theme.spacing(5),
      width: theme.spacing(60),
      height: theme.spacing(90),
      backgroundColor: "#51a0e6",
    },
  },
}));

function Weather(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Paper elevation={3}>
          <WeatherComponent />
        </Paper>
      </div>
    </React.Fragment>
  );
}

export default Weather;
