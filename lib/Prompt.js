const inquirer = require('inquirer');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

function Prompt() {
    this.employeeList = [];
    this.id = 1;
};

Prompt.prototype.initialize = function() {
    console.log(`
======================
Team Profile Generator
======================    
`)
    
    inquirer.prompt([
        {
            type: 'text',
            name: 'managerName',
            message: "What is the manager's name? (Required)",
            validate: managerNameInput => {
                if(!managerNameInput)
                    console.log('\nYou must enter a name!');
                return managerNameInput !== '';
            }
        },
        {
            type: 'text',
            name: 'managerEmail',
            message: "What is the manager's email address? (Required)",
            validate: managerEmailInput => {
                if(!managerEmailInput)
                    console.log('\nYou must enter an email!');
                else if(!this.isValidEmail(managerEmailInput))
                    console.log('\nYou must enter a valid email!');
                return this.isValidEmail(managerEmailInput);
            }
        },
        {
            type: 'text',
            name: 'managerOffice',
            message: "What is the manager's office number? (Required)",
            validate: managerOfficeInput => {
                if(!managerOfficeInput)
                    console.log('\nYou must enter an office number!');
                else if(!this.isValidOfficeNumber(managerOfficeInput))
                    console.log('\nYou must enter a valid office number!');
                return this.isValidOfficeNumber(managerOfficeInput);
            }
        }
    ]).then(({managerName, managerEmail, managerOffice}) => {
        let manager = new Manager(managerName, this.id++, managerEmail, managerOffice);
        this.employeeList.push(manager);
        console.log('\n');
        this.promptActions();
    })
};

Prompt.prototype.promptActions = function () {
    inquirer.prompt({
        type: 'list',
        message: 'What would you like to do?',
        name: 'action',
        choices: ['Add a new engineer', 'Add a new intern', 'Exit application and build page']
    }).then(({action}) => {
        if(action.includes('engineer')) {
            this.getEngineer();
        } else if(action.includes('intern')) {
            this.getIntern();
        } else {
            this.buildAndExit();
        }
    })
};

Prompt.prototype.getEngineer = function() {
    inquirer.prompt([
        {
            type: 'text',
            name: 'engineerName',
            message: "What is the engineer's name? (Required)",
            validate: engineerNameInput => {
                if(!engineerNameInput)
                    console.log('\nYou must enter a name!');
                return engineerNameInput !== '';
            }
        },
        {
            type: 'text',
            name: 'engineerEmail',
            message: "What is the engineer's email address? (Required)",
            validate: engineerEmailInput => {
                if(!engineerEmailInput)
                    console.log('\nYou must enter an email!');
                else if(!this.isValidEmail(engineerEmailInput))
                    console.log('\nYou must enter a valid email!');
                return this.isValidEmail(engineerEmailInput);
            }
        },
        {
            type: 'text',
            name: 'engineerGithub',
            message: "What is the engineer's github username? (Required)",
            validate: engineerGithubInput => {
                if(!engineerGithubInput)
                    console.log('\nYou must enter a github username!');
                    return engineerGithubInput !== '';
            }
        }
    ]).then(({engineerName, engineerEmail, engineerGithub}) => {
        let engineer = new Engineer(engineerName, this.id++, engineerEmail, engineerGithub);
        this.employeeList.push(engineer);
        console.log(`\nNew engineer ${engineerName} has been added to the employee list.\n`);
        this.promptActions();
    })
};

Prompt.prototype.getIntern = function() {
    inquirer.prompt([
        {
            type: 'text',
            name: 'internName',
            message: "What is the intern's name? (Required)",
            validate: internNameInput => {
                if(!internNameInput)
                    console.log('\nYou must enter a name!');
                return internNameInput !== '';
            }
        },
        {
            type: 'text',
            name: 'internEmail',
            message: "What is the intern's email address? (Required)",
            validate: internEmailInput => {
                if(!internEmailInput)
                    console.log('\nYou must enter an email!');
                else if(!this.isValidEmail(internEmailInput))
                    console.log('\nYou must enter a valid email!');
                return this.isValidEmail(internEmailInput);
            }
        },
        {
            type: 'text',
            name: 'internSchool',
            message: "What is the intern's school name? (Required)",
            validate: internSchoolInput => {
                if(!internSchoolInput)
                    console.log('\nYou must enter a school name!');
                    return internSchoolInput !== '';
            }
        }
    ]).then(({internName, internEmail, internSchool}) => {
        let intern = new Intern(internName, this.id++, internEmail, internSchool);
        this.employeeList.push(intern);
        console.log(`\nNew intern ${internName} has been added to the employee list.\n`);
        this.promptActions();
    })
};

Prompt.prototype.buildAndExit = function() {
    console.log(this.employeeList);
    console.log('Building page...');
    console.log('Exiting. Have a great day!');
}

Prompt.prototype.isValidEmail = function(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return email.match(emailRegex) ? true : false;
};

Prompt.prototype.isValidOfficeNumber = function(phone) {
    const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;
    return phone.match(phoneRegex) ? true : false;
};

module.exports = Prompt;