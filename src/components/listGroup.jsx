import React from "react";

const ListGroup = props => {
  const { items, selectedItem, onItemSelect } = props;
  return (
    <div>
      <ul className="list-group">
        {items.map(item => (
          <li
            key={item.name}
            onClick={() => onItemSelect(item)}
            style={{ cursor: "Pointer" }}
            className={
              item === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
