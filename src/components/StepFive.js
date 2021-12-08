import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import "../sass/components/_landing.scss";

export class StepFive extends Component {
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
    let isdisabled = "disabled";
    let message = "";
    let createVisibility = "";
    let recommendVisibility = "";

    if (values.createAccount === "Yes") {
      if (values.country === "" || values.employed === "") {
        message = "* Kindly answer the questions (Yes or No)";
        isdisabled = "disabled";
      } else {
        message = "";
        isdisabled = "enabled";
      }
      createVisibility = "";
      recommendVisibility = "hidden";
      title = "Account creation";
    } else {
      if (values.recommend === "") {
        message = "* Kindly answer the question (Yes or No)";
        isdisabled = "disabled";
      } else {
        message = "";
        isdisabled = "enabled";
      }
      createVisibility = "hidden";
      recommendVisibility = "";
      title = "Recommend";
    }
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title={title} />
          <div className="clearfix"></div>

          {/* account creation */}
          <div className={createVisibility}>
            <p className="description">Fill in the details below</p>
            <div>
              <TextField
                hintText="Country"
                floatingLabelText="Country"
                onChange={handleChange("country")}
                defaultValue={values.country}
              />
            </div>
            <div>
              <TextField
                hintText="Are you employed?"
                floatingLabelText="Are you employed?"
                onChange={handleChange("employed")}
                defaultValue={values.employed}
              />
            </div>
            <p className="small__text">
              <i>Yes or No</i>
            </p>
          </div>

          {/* recommendation */}
          <div className={recommendVisibility}>
            <p className="description">
              Would you recommend our services to others?
            </p>
            <TextField
              hintText="Your answer"
              floatingLabelText="Your answer"
              onChange={handleChange("recommend")}
              defaultValue={values.recommend}
            />
            <p className="small__text">
              <i>Yes or No</i>
            </p>
          </div>
          <div className={message}></div>

          {/* buttons */}
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
export default StepFive;
