const Employee = require("../lib/Employee");

test("creates an employee object with name, id, and email properties", () => {
  const employee = new Employee("John Doe", 1, "johndoe@example.com");
  expect(employee.name).toEqual("John Doe");
  expect(employee.id).toEqual(1);
  expect(employee.email).toEqual("johndoe@example.com");
});

test("returns the name, id and email of the employee object", () => {
  const employee = new Employee("Jane Doe", 2, "janedoe@example.com");
  expect(employee.getName()).toEqual("Jane Doe");
  expect(employee.getId()).toEqual(2);
  expect(employee.getEmail()).toEqual("janedoe@example.com");
});

test("returns the role of the employee as 'Employee'", () => {
  const employee = new Employee("Joe Smith", 3, "joesmith@example.com");
  expect(employee.getRole()).toEqual("Employee");
});
