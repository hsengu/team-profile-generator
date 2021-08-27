const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

// Function to generate the HTML that will go into the HTML file
const generatePage = employeeList => {
    let page = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@5.15.4/css/fontawesome.min.css" integrity="sha384-jLKHWM3JRmfMU0A5x5AkjWkw/EYfGUAGagvnfryNV3F9VqM98XiIH7VBGVoxVSc7" crossorigin="anonymous">
        <link rel="stylesheet" href="./css/index.css">
        <title>Team Profile Generator</title>
    </head>
    <body>
        <header class="header">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
                <a class="navbar-brand" href="#">Team Profile Generator</a>
            </nav>
        </header>
        <main role="main" class="container">
            <div class="container">
                <div class="row justify-content-center">
                    ${employeeList.map(employee => cardBuilder(employee)).join('')}
                </div>
            </div>
        </main>
        <footer class="footer">
            <div class="container">
                <span class="text-muted">&copy; 2021 by Hok S. Uy</span>
            </div>
        </footer>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.min.js" integrity="sha384-cn7l7gDp0eyniUwwAZgrzD06kc/tftFf19TOAs2zVinnD/C7E91j9yyk5//jjpt/" crossorigin="anonymous"></script>
    </body>
    </html>
    `;

    return page;
};

// Function for building employee card elements
const cardBuilder = employee => {
        let role = employee.getRole().toLowerCase();
        let badge = '';
        let listItem = '';

        switch(role) {
            case 'manager': badge = 'fas fa-mug-hot';
                            listItem = `Office Number: ${employee.officeNumber}`;
                            break;
            case 'engineer': badge = 'fas fa-laptop-code';
                            listItem = `GitHub: <a href="https://github.com/${employee.getGithub()}">${employee.getGithub()}</a>`;
                            break;
            case 'intern': badge = 'fas fa-laptop-code';
                        listItem = `School: ${employee.getSchool()}`;
                        break;
        }

        let result = `
        <div class="col-xl-3 col-lg-4 col-sm-6 col-xs-12">
            <div class="card w-100">
                <div class="card-header ${role}-header">
                    <h5 class="card-title">${employee.getName()}</h5>
                    <h6 class="card-subtitle text-muted"><i class="${badge}"></i> ${employee.getRole()}</h6>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.getId()}</li>
                    <li class="list-group-item">E-mail: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                    <li class="list-group-item">${listItem}</li>
                </ul>
            </div>
        </div>
    `;

    return result;
}

// Export the generatePage function
module.exports = generatePage;