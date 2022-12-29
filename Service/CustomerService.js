export class CustomerService {
  // get all customer data
  static async getAllCustomerData() {
    let response = await fetch(
      "https://vexpress.onrender.com/api/customer/all"
    );
    let json = await response.json();

    return json;
  }

  // get customer by id
  static async getCustomerById(id) {
    let response = await fetch(
      "https://vexpress.onrender.com/api/customer/" + id
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

  // update customer
  static updateCustomer(customer) {
    fetch("https://vexpress.onrender.com/api/customer/" + customer._id, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(customer),
    });
  }

  // delete customer
  static async deleteCustomer(id) {
    await fetch("https://vexpress.onrender.com/api/customer/" + id, {
      method: "DELETE",
    });
  }

  // Add entry
  static addVehicleEntry(item) {
    item.amount -= 5;
    item.date = new Date();

    fetch("https://vexpress.onrender.com/api/customer/" + item._id, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });
  }
}
