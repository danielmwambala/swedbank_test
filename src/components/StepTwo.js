import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import "../sass/components/_landing.scss";
import { Link } from "react-router-dom";

export class StepTwo extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    const { values, handleChange } = this.props;
    let message = "";
    let isdisabled = "disabled";
    if (values.name === "" || values.age === "") {
      message = "* Fill in the form correctly";
      isdisabled = "disabled";
    } else {
      message = "";
      isdisabled = "enabled";
    }
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter your details" />
          <div>
            <TextField
              hintText="Your name"
              floatingLabelText="Name"
              onChange={handleChange("name")}
              defaultValue={values.name}
            />
          </div>
          <div>
            <TextField
              hintText="Age"
              floatingLabelText="Age"
              onChange={handleChange("age")}
              defaultValue={values.age}
            />
          </div>
          <div className="text-danger">{message}</div>
          <div>
            <Link to="/">
              <button className="btn btn__primary">Back</button>
            </Link>
            <button
              id={isdisabled}
              className="btn btn__active"
              onClick={this.continue}
            >
              Continue
            </button>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default StepTwo;
