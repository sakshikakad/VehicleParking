export class CustomerService {
  static getAllCustomerData() {
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
    ];

    return dummyCustomerData;
  }
}
