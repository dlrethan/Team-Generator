const Intern = require("../lib/Intern");

test("creates an Intern object with name, id, email and school properties", () => {
  const intern = new Intern(
    "John Doe",
    1,
    "johndoe@example.com",
    "University of XYZ"
  );
  expect(intern.name).toEqual("John Doe");
  expect(intern.id).toEqual(1);
  expect(intern.email).toEqual("johndoe@example.com");
  expect(intern.school).toEqual("University of XYZ");
});

test("returns the school of the Intern object", () => {
  const intern = new Intern(
    "Jane Doe",
    2,
    "janedoe@example.com",
    "University of ABC"
  );
  expect(intern.getSchool()).toEqual("University of ABC");
});

test("returns the role of the Intern object as 'Intern'", () => {
  const intern = new Intern(
    "Joe Smith",
    3,
    "joesmith@example.com",
    "University of DEF"
  );
  expect(intern.getRole()).toEqual("Intern");
});

test("inherits the methods and properties of Employee class", () => {
  const intern = new Intern(
    "John Doe",
    1,
    "johndoe@example.com",
    "University of XYZ"
  );
  expect(intern.getName()).toEqual("John Doe");
  expect(intern.getId()).toEqual(1);
  expect(intern.getEmail()).toEqual("johndoe@example.com");
});
