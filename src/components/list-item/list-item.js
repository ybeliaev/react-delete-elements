import React, { Component } from "react";
import "./list-item.css";

export default class ListItem extends Component {
  render() {
    const { label, onDeletedItem } = this.props;
    let classNames = "wrapper-list-item";

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
