import React from "react";

import ListItem from "../list-item";
import "./list.css";

const List = ({ someProps, onDeleted }) => {
  const element = someProps.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id} className="list-group-item">
        <ListItem {...itemProps} onDeletedItem={() => onDeleted(id)} />
      </li>
    );
  });
  return <ul className="todo-list">{element}</ul>;
};
export default List;
