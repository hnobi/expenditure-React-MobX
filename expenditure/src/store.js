import { decorate, observable, action, computed } from "mobx";

class Store {

  expensesList = [
    { name: "Rice", amount: 90 },
    { name: "Fuel", amount: 100 },
  ]

  clearList() {
    this.expensesList = [];
  }

  addExpenses(expenses) {
    this.expensesList.push(expenses);
  }
  get totalExpenses() {
    let total = 0;
    this.expensesList.map(expenses => total = total + expenses.amount)
    return total
  }
}



decorate(Store, {
  expensesList: observable,
  addExpenses: action,
  clearList: action,
  totalExpenses: computed
})




const appStore = new Store();
//Or
// const appStore = observable({
//   expensesList : [
//     { name: "Rice", amount: 90 },
//     { name: "Fuel", amount: 225 },
//   ]
//  });

export default appStore;
