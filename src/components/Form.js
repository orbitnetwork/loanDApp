import React, { Component } from "react";
import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Well,
  Button
} from "react-bootstrap";

import web3 from "../web3";
import SubmitButton from "./SubmitButton";

const styles = {
  wellStyle: {
    width: "80%",
    margin: "auto"
  },
  formStyle: {
    width: "60%",
    margin: "auto"
  }
};

class Form extends Component {
  state = {
    value: "",
    isLoading: false
  };

  getValidationState = () => {
    const value = this.state.value;
    if (/[a-zA-Z]+$/.test(value)) return "error";
    return null;
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  onSubmit = async event => {
    event.preventDefault();
    const accounts = await web3.eth.getAccounts();
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div style={{ marginTop: "20px" }}>
        <Well style={styles.wellStyle} bsSize="large">
          <form style={styles.formStyle} onSubmit={this.onSubmit}>
            <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
            >
              <ControlLabel>Enter Amount of Collateral to deposit</ControlLabel>

              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Ethers..."
                onChange={this.handleChange}
              />
              <FormControl.Feedback />
            </FormGroup>
            <SubmitButton isLoading={isLoading} />
          </form>
        </Well>
      </div>
    );
  }
}

export default Form;