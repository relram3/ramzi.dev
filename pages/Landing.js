import React, { Component } from 'react';

export default class Landing extends Component {
  render() {
    return (
      <div className="landing overlay">
        <div className="header">
          <h1>
            Hello, I'm <span className="name">Ramzi El-Ramahi</span>. <br />I'm a full-stack web developer.
          </h1>
        </div>
      </div>
    )
  }
}
