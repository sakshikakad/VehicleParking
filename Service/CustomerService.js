const dummyCustomerData = [
  {
    _id: "6393e9fa62dda1a2b8cb2f0f",
    rollNo: "57",
    name: "Sakshi Kakad",
    amount: 150,
    __v: 0,
  },
  {
    _id: "6393ea3362dda1a2b8cb2f11",
    rollNo: "10",
    name: "Shreya Bharati",
    amount: 200,
    __v: 0,
  },
  {
    _id: "6393ea6262dda1a2b8cb2f14",
    rollNo: "08",
    name: "Manali Barad",
    amount: 120,
    __v: 0,
  },
  {
    _id: "6393ea6262dda1a2b8cb2f15",
    rollNo: "11",
    name: "Akshay Kakad",
    amount: 120,
    __v: 0,
  },
  {
    _id: "6393ea6262dda1a2b8cb2f16",
    rollNo: "12",
    name: "Deepika Kakad",
    amount: 120,
    __v: 0,
  },
  {
    _id: "6393ea6262dda1a2b8cb2f17",
    rollNo: "13",
    name: "Pratik Lahane",
    amount: 120,
    __v: 0,
  },
  {
    _id: "6393ea6262dda1a2b8cb2f18",
    rollNo: "14",
    name: "Rutuja Lahane",
    amount: 120,
    __v: 0,
  },
  {
    _id: "6393ea6262dda1a2b8cb2f19",
    rollNo: "15",
    name: "Seema Kakad",
    amount: 120,
    __v: 0,
  },
];

export class CustomerService {
  // get all customer data
  static getAllCustomerData() {
    return dummyCustomerData;
  }

  // add customer
  static addCustomer(customer){
    customer._id = "6393ea6262dda1a2b8cb2f20"
    dummyCustomerData.push(customer);
  }

  // Add entry
  static addEntry(item){
    for (const obj of dummyCustomerData) {
      if (obj._id === item._id) {
        obj.amount -= 5;
    
        break;
      }
    }
  }
}
