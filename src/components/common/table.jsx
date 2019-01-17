import React from "react";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
const Table = ({ columns, onSort, sortColumn, data }) => {
  return (
    <table className="table" id="table">
      <TableHeader columns={columns} onSort={onSort} sortColumn={sortColumn} />
      <TableBody columns={columns} data={data} />
    </table>
  );
};

export default Table;
