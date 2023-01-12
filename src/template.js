const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

function generateTeam(teamArray) {
  let html = "";
  html += `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Team Profile</title>
        <link rel="stylesheet" href="./stylesheet.css"/>
      </head>
      <body>
        <h1>Team Profile</h1>`;

  teamArray.forEach((employee) => {
    if (employee instanceof Manager) {
      html += `
          <div class="employee-card">
            <div class="card-header">
              <div>Name: ${employee.name}</div>
              <div>Role: Manager</div>
            </div>
            <div class="card-content">
              <div>ID: ${employee.id}</div>
              <div>Email: <a href="mailto:${employee.email}">${employee.email}</a></div>
              <div>Office Number: ${employee.officeNumber}</div>
            </div>
            <div class="card-footer"></div>
          </div>
        `;
    } else if (employee instanceof Engineer) {
      html += `
          <div class="employee-card">
          <div class="card-header">
          <div>Name: ${employee.name} </div>
          <div>Role: Engineer</div>
        </div>
        <div class="card-content">
          <div>ID: ${employee.id} </div>
          <div>Email: <a href="mailto:${employee.email}">${employee.email} </a></div>
          <div>GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a></div>
        </div>
        <div class="card-footer"></div>
      </div>
      `;
    } else if (employee instanceof Intern) {
      html += `
      <div class="employee-card">
        <div class="card-header">
          <div>Name: ${employee.name} </div>
          <div>Role: Intern</div>
        </div>
        <div class="card-content">
          <div>ID: ${employee.id} </div>
          <div>Email: <a href="mailto:${employee.email}">${employee.email}</a></div>
          <div>School: ${employee.school} </div>
        </div>
        <div class="card-footer"></div>
      </div>
      `;
    }
  });
  html += "</body></html>";

  return html;
}

module.exports = generateTeam;
