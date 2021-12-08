import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import "../sass/components/_landing.scss";
import { Link } from "react-router-dom";

export class Summary extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    const { values } = this.props;
    const createVisible = values.haveAccount === "Yes" ? "hidden" : "";
    const satisfiedVisible = values.haveAccount === "Yes" ? "" : "hidden";
    let createVisibility = values.createAccount === "Yes" ? "" : "hidden";
    let recommendVisibility = values.createAccount === "Yes" ? "hidden" : "";
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Summary" />
          <div className="clearfix"></div>
          <div className="landing__container">
            <div>
              <p className="description">User details</p>
              <hr />
            </div>
            {/* step one */}
            <div>
              <div className="summary">
                <p className="description">Name:</p>
                <i>{values.name}</i>
              </div>
              <div className="summary">
                <p className="description">Age:</p>
                <i>{values.age}</i>
              </div>
            </div>
            <hr />

            {/* step 2 */}
            <div>
              <div className="summary">
                <p className="description">Are you registered with us?</p>
                <i>{values.haveAccount}</i>
              </div>
            </div>
            <hr />

            {/* step 3 */}
            <div className={createVisible}>
              <div className="summary">
                <p className="description">
                  Would you like to create an account?
                </p>
                <i>{values.createAccount}</i>
              </div>
            </div>
            <hr />

            {/* step 4 */}
            <div className={satisfiedVisible}>
              <div className="summary">
                <p className="description">Are you happy with our services?</p>
                <span>{values.satisfied}</span>
              </div>
            </div>
            <hr />

            {/* step 5 */}
            <div className={createVisibility}>
              <div className="summary">
                <p className="description">Country:</p>
                <span>{values.country}</span>
              </div>

              <div className="summary">
                <p className="description">Are you employed?</p>
                <span>{values.employed}</span>
              </div>
            </div>
            <hr />

            {/* step 6 */}
            <div className={recommendVisibility}>
              <div className="summary">
                <p className="description">
                  Would you recomend our services to others?
                </p>
                <span>{values.recommend}</span>
              </div>
            </div>
            <hr />

            {/* buttons */}
            <div>
              <button className="btn btn__primary" onClick={this.back}>
                Back
              </button>
              <Link to="/end">
                <button className="btn btn__active">Confirm</button>
              </Link>
            </div>
          </div>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default Summary;
