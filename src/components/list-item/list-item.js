import React, { Component } from "react";
import "./list-item.css";

export default class ListItem extends Component {
  // state = {
  //   done: false,
  //   important: false
  // };
  render() {
    const { label, important, done, onDeletedItem } = this.props;
    let classNames = "wrapper-list-item";
    // if (done) {
    //   classNames += " done";
    // }
    // if (important) {
    //   classNames += " important";
    // }

    return (
      <span className={classNames}>
        <span className="list-item-label">{label}</span>
        <button className="btn btn-exclamation">
          <i className="fa fa-exclamation" />
        </button>
        <button type="button" className="btn btn-trash" onClick={onDeletedItem}>
          <i className="fa fa-trash-o" />
        </button>
      </span>
    );
  }
}
