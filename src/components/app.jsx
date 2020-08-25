import React, { Component } from "react";
import { connect } from 'react-redux';
import { addReminder } from '../actions';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  addReminder() {
    //console.log("this", this);
    this.props.addReminder(this.state.text)
  }

  render() {
    return (
      <div className="App">
        <div className="title">Reminder Pro</div>
        <div className="form-inline">
          <div className="form-group">
            <input
              onChange={(event) => this.setState({ text: event.target.value })}
              className="form-control"
              placeholder="I have to..."
            />
            <button onClick={() => this.addReminder()} type="button" className="btn btn-success">
              Add Reminder
            </button>
          </div>
        </div>
      </div>
    );
  }
}


export default connect(null, {addReminder}) (App);

