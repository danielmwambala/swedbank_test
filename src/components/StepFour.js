import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import "../sass/components/_landing.scss";

export class StepFour extends Component {
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
    let title = "";
    let createVisible = "";
    let satisfiedVisible = "";
    let message = "";
    let isdisabled = "disabled";

    if (values.haveAccount === "Yes") {
      if (values.satisfied === "") {
        message = "* Kindly answer the question (Yes or No)";
        isdisabled = "disabled";
      } else {
        message = "";
        isdisabled = "";
      }
      createVisible = "hidden";
      satisfiedVisible = "";
      title = "Satisfaction";
    } else {
      if (values.createAccount === "") {
        message = "* Kindly answer the question (Yes or No)";
        isdisabled = "disabled";
      } else {
        message = "";
        isdisabled = "";
      }
      createVisible = "";
      satisfiedVisible = "hidden";
      title = "Account creation";
    }

    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title={title} />
          <div className="clearfix"></div>
          {/* create an account */}
          <div className={createVisible}>
            <p className="description">Would you like to create an account?</p>
            <TextField
              hintText="Your answer"
              floatingLabelText="Your answer"
              onChange={handleChange("createAccount")}
              defaultValue={values.createAccount}
            />
          </div>

          {/* satisfaction */}
          <div className={satisfiedVisible}>
            <p className="description">Are you happy with our services?</p>
            <TextField
              hintText="Your answer"
              floatingLabelText="Your answer"
              onChange={handleChange("satisfied")}
              defaultValue={values.satisfied}
            />
          </div>
          <div className="text-danger">{message}</div>

          {/* buttons (next and previous buttons) */}
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
export default StepFour;
