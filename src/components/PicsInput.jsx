import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class PicsInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: "",
      inputUrl: ""
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleUrlChange = this.handleUrlChange.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleClick() {
    const inputNameValue = this.state.inputName;
    const inputUrlValue = this.state.inputUrl;
    this.props.addPic(inputNameValue, inputUrlValue);
  }

  handleReset() {
    this.props.resetPic();
  }

  handleNameChange(e) {
    console.log(e.target.nameValue);
    this.setState({
      inputName: e.target.value
    });
  }
  handleUrlChange(e) {
    this.setState({
      inputUrl: e.target.value
    });
  }

  render() {
    return (
      <div>
        {/*Input the Pics NAME*/}
        <h2>Upload Pics by URL</h2>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              PicsName
            </span>
          </div>
          <input
            placeholder="Please input a Pics Name"
            style={{ width: "500px" }}
            required
            value={this.state.inputName}
            onChange={this.handleNameChange}
          />
        </div>

        {/*Input the Pics URL*/}
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              PicsURL
            </span>
          </div>
          <input
            placeholder="Please input the Pics URL"
            style={{ width: "512px" }}
            required
            value={this.state.inputUrl}
            onChange={this.handleUrlChange}
          />
        </div>
        <button
          onClick={this.handleClick}
          className="btn btn-outline-primary m-3"
        >
          Update
        </button>
        <button
          onClick={this.handleReset}
          className="btn btn-outline-danger m-1"
        >
          Reset
        </button>
      </div>
    );
  }
}

export default PicsInput;
