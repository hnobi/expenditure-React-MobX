import React, { Component } from "react";
import Row from './Row';
import { observer } from "mobx-react";


  class Table extends Component {
    render() {
      return (
          <table>
            <thead>
              <tr>
                <td>Services</td>
                <td>Amount:</td>
              </tr>
            </thead>
            <tbody>
              {this.props.store.expensesList.map((e, i) =>
                <Row
                  key={i}
                  tableData={e}
                />
              )}
            </tbody>
            <tfoot>
            <tr>
            <td>TOTAL:</td>
            <td>${this.props.store.totalExpenses}</td>
          </tr>
            </tfoot>
          </table>
      )
    }
  }
  Table = observer(Table)

export default Table;