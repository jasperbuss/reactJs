import React, { Component } from "react";
//import { Liked } from "./common/like";
import _ from "lodash"; //for array handling

//extracting components
class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) return column.content(item); //renders the item, if exists

    return _.get(item, column.path); //_.get(movies, targerProperty) nested!
  };
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {/* data = movies */}
        {data.map((
          item //map movies inside the column.path
        ) => (
          <tr key={item._id}>
            {columns.map(column => (
              <td key={item._id + (column.path || column.key)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
