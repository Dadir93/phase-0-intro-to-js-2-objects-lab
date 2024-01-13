// Write your solution in this file!
const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  console.log("Original Employee:", employee);
  
  const updatedEmployee1 = updateEmployeeWithKeyAndValue(employee, "name", "Jane Doe");
  console.log("Updated Employee (non-destructive):", updatedEmployee1);
  
  const updatedEmployee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Oak St");
  console.log("Updated Employee (destructive):", updatedEmployee2);
  
  const employeeWithoutName = deleteFromEmployeeByKey(employee, "name");
  console.log("Employee without Name (non-destructive):", employeeWithoutName);
  
  const employeeWithoutStreetAddress = destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee without Street Address (destructive):", employeeWithoutStreetAddress);
  