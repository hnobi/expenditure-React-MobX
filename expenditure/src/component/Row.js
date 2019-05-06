import React from "react";


const Row = (props) => {
  return (<tr>
    <td>{props.tableData.name}</td>
    <td>{props.tableData.amount}</td>
  </tr>)
}

export default Row;
