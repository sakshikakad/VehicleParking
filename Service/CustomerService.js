export class CustomerService {
  // get all customer data
  static async getAllCustomerData() {
    let response = await fetch(
      "https://vexpress.onrender.com/api/customer/all"
    );
    let json = await response.json();

    return json;
  }

  // add customer
  static addCustomer(customer) {
    fetch("https://vexpress.onrender.com/api/customer", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    });
  }

  // Add entry
  static addEntry(item) {
    for (const obj of dummyCustomerData) {
      if (obj._id === item._id) {
        obj.amount -= 5;

        break;
      }
    }
  }
}
