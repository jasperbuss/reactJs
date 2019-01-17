import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = path => {
    //copying props
    const sortColumn = { ...this.props.sortColumn };
    //path equals default path
    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      // set the new, clicked path
      sortColumn.path = path;
      sortColumn.order = "desc";
    }

    this.props.onSort(sortColumn);
  };

  renderSortIcon = column => {
    const { sortColumn } = this.props;
    // to avoid icon when not selected
    if (column.path !== this.props.sortColumn.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc" />;
    return <i className="fa fa-sort-desc" />;
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map(column => (
            <th
              className="clickable"
              key={column.path}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label}

              {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
