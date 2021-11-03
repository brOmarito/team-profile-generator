const mainTemplate = `<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css">
    <title>Team Profile</title>
</head>
<body>
    <header>
        <nav class="navbar fixed-top navbar-light bg-light text-center">
            <div class="container-fluid">
                <span>Team Profile</span>
            </div>
        </nav>
    </header>
    <main>
        <div class="card-group">
            {{CARD_SECT}}
        </div>
    </main>
</body>
</html>`

const employeeTemplate = `<div class="card">
<div class="card-header">{{EMPLOYEE_HEADER}}</div>
<div class="card-body">
    <h5 class="card-title">{{EMPLOYEE_NAME}}</h5>
    <p class="card-text employee-info">
        ID: {{EMPLOYEE_ID}}<br>
        Email: <a href="mailto:{{EMPLOYEE_EMAIL}}" target="_blank" rel="noopener noreferrer">{{EMPLOYEE_EMAIL}}</a><br>
        {{CUSTOM_SECT}}
    </p>
</div>
</div>
`

const managerString = `Office Number: {{OFFICE_NUMBER}}`;

const engineerString = `GitHub: <a href="https://github.com/{{GITHUB}}">{{GITHUB}}</a>`;

const internString = `School: {{SCHOOL}}`;

exports.mainTemplate = mainTemplate;
exports.employeeTemplate = employeeTemplate;
exports.managerString = managerString;
exports.engineerString = engineerString;
exports.internString = internString;
