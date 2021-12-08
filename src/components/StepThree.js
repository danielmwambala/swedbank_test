import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import "../sass/components/_landing.scss";

export class StepThree extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;

    let message = "";
    let isdisabled = "disabled";

    if (values.haveAccount === "") {
      message = "* Kindly answer the question (Yes or No)";
      isdisabled = "disabled";
    } else {
      message = "";
      isdisabled = "enabled";
    }

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Are you registered with us?" />
          <div>
            <TextField
              hintText="Your answer"
              floatingLabelText="Your answer"
              onChange={handleChange("haveAccount")}
              defaultValue={values.haveAccount}
            />
          </div>
          <div className="text-danger">{message}</div>
          <div>
            <button className="btn btn__primary" onClick={this.back}>
              Back
            </button>
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
export default StepThree;
