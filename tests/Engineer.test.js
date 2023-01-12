const Engineer = require("../lib/Engineer");

test("creates an Engineer object with name, id, email and github properties", () => {
  const engineer = new Engineer(
    "John Smith",
    1,
    "jsmith@example.com",
    "jsmith"
  );
  expect(engineer.name).toEqual("John Smith");
  expect(engineer.id).toEqual(1);
  expect(engineer.email).toEqual("jsmith@example.com");
  expect(engineer.github).toEqual("jsmith");
});

test("returns the github of the Engineer object", () => {
  const engineer = new Engineer(
    "Jane Smith",
    2,
    "janesmith@example.com",
    "janesmith"
  );
  expect(engineer.getGithub()).toEqual("janesmith");
});

test("returns the role of the Engineer object as 'Engineer'", () => {
  const engineer = new Engineer(
    "Joe Smith",
    3,
    "joesmith@example.com",
    "joesmith"
  );
  expect(engineer.getRole()).toEqual("Engineer");
});

test("inherits the methods and properties of Employee class", () => {
  const engineer = new Engineer(
    "John Smith",
    1,
    "jsmith@example.com",
    "jsmith"
  );
  expect(engineer.getName()).toEqual("John Smith");
  expect(engineer.getId()).toEqual(1);
  expect(engineer.getEmail()).toEqual("jsmith@example.com");
});
