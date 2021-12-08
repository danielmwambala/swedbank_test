import React, { Component } from "react";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import Summary from "./Summary";

export class StepOne extends Component {
  state = {
    step: 1,
    name: "",
    age: "",

    haveAccount: "",

    createAccount: "",
    satisfied: "",

    country: "",
    employed: "",

    youKnowAboutUs: "",

    recommend: "",
  };

  // proceed to next step
  nextStep = () => {
    let { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  // Go to previous step
  prevStep = () => {
    let { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  //   handle field change
  handleChange = (input) => (e) => {
    this.setState({ [input]: e.target.value });
  };
  render() {
    const { step } = this.state;
    const {
      name,
      age,
      youKnowAboutUs,
      haveAccount,
      createAccount,
      satisfied,
      country,
      employed,
      recommend,
    } = this.state;
    const values = {
      name,
      age,
      youKnowAboutUs,
      haveAccount,
      createAccount,
      satisfied,
      country,
      employed,
      recommend,
    };

    switch (step) {
      case 1:
        return (
          <StepTwo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <StepThree
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 3:
        return (
          <StepFour
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 4:
        return (
          <StepFive
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );

      case 5:
        return <Summary prevStep={this.prevStep} values={values} />;

      default:
        return <div>Not found</div>;
    }
  }
}
export default StepOne;
