const Manager = require("../lib/Manager");

test("creates a Manager object with name, id, email, and officeNumber properties", () => {
  const manager = new Manager("John Smith", 1, "jsmith@example.com", "123");
  expect(manager.name).toEqual("John Smith");
  expect(manager.id).toEqual(1);
  expect(manager.email).toEqual("jsmith@example.com");
  expect(manager.officeNumber).toEqual("123");
});

test("returns the office number of the Manager object", () => {
  const manager = new Manager("Jane Smith", 2, "janesmith@example.com", "456");
  expect(manager.getOfficeNumber()).toEqual("456");
});

test("returns the role of the Manager object as 'Manager'", () => {
  const manager = new Manager("Joe Smith", 3, "joesmith@example.com", "789");
  expect(manager.getRole()).toEqual("Manager");
});

test("inherits the methods and properties of Employee class", () => {
  const manager = new Manager("John Smith", 1, "jsmith@example.com", "123");
  expect(manager.getName()).toEqual("John Smith");
  expect(manager.getId()).toEqual(1);
  expect(manager.getEmail()).toEqual("jsmith@example.com");
});
