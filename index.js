const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const pageBuilder = require('./src/pageBuilder.js');
const {writeFile, copyFile} = require('./src/generateSite.js');
let id = 1;

// Main prompt function for the application
const prompt = () => {
    console.log(`
======================
Team Profile Generator
======================    
`)
    // Prompts for manager information and returns an array of Employee objects.
    return inquirer.prompt([
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
                else if(!isValidEmail(managerEmailInput))
                    console.log('\nYou must enter a valid email!');
                return isValidEmail(managerEmailInput);
            }
        },
        {
            type: 'text',
            name: 'managerOffice',
            message: "What is the manager's office number? (Required)",
            validate: managerOfficeInput => {
                if(!managerOfficeInput)
                    console.log('\nYou must enter an office number!');
                else if(!isValidOfficeNumber(managerOfficeInput))
                    console.log('\nYou must enter a valid office number!');
                return isValidOfficeNumber(managerOfficeInput);
            }
        }
    ]).then(({managerName, managerEmail, managerOffice}) => {
        let employeeList = [];                                                                  // Create a list of employees
        let manager = new Manager(managerName, id++, managerEmail, managerOffice);              // Create a manager obect
        employeeList.push(manager);                                                             // Add manager to the employee list
        console.log(`Manager ${managerName} added to the employee list.\n`);                    // Output outcome to console
        return employeeList;                                                                    // Return list as a promise
    })
};

// Prompt for checking what the user would like to do next.
const promptActions = employeeList => {
    return inquirer.prompt({
        type: 'list',
        message: 'What would you like to do?',
        name: 'action',
        choices: ['Add a new engineer', 'Add a new intern', 'Exit application and build page']
    }).then(({action}) => {
        if(action.includes('engineer')) {
            return getEngineer(employeeList);               // If the user chose add an engineer calls getEngineer prompt.
        } else if(action.includes('intern')) {
            return getIntern(employeeList);                 // If the user chose add an intern calls getIntern prompt.
        } else {
            return employeeList;                            // If the user chooses to exit the application, return the built employee list.
        }
    })
};

// Prompt for getting an enginner's information
const getEngineer = employeeList => {
    return inquirer.prompt([
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
                else if(!isValidEmail(engineerEmailInput))
                    console.log('\nYou must enter a valid email!');
                return isValidEmail(engineerEmailInput);
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
        let engineer = new Engineer(engineerName, id++, engineerEmail, engineerGithub);                 // Build a new engineer object with the user input information
        employeeList.push(engineer);                                                                    // Push the object to the employee list
        console.log(`\nNew engineer ${engineerName} has been added to the employee list.\n`);           // Output outcome to console
        return promptActions(employeeList);                                                             // Return the list as a promise
    })
};

// Prompt for getting an enginner's information
const getIntern = employeeList => {
    return inquirer.prompt([
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
                else if(!isValidEmail(internEmailInput))
                    console.log('\nYou must enter a valid email!');
                return isValidEmail(internEmailInput);
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
        let intern = new Intern(internName, id++, internEmail, internSchool);                       // Build an intern object with the user input information.
        employeeList.push(intern);                                                                  // Push the object to the employeeList
        console.log(`\nNew intern ${internName} has been added to the employee list.\n`);           // Output outcome to console
        return promptActions(employeeList);                                                         // Return the list as a promise.
    })
};

// Helper function for checking if a valid email is input
const isValidEmail = email => {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;        // RegEx pattern for checking most types of emails
    return email.match(emailRegex) ? true : false;                  // If pattern matches return true, false if not
};

// Helper function for checking if a valid office number is input
const isValidOfficeNumber = phone => {
    const phoneRegex = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;     // RegEx pattern for checking common phone formats
    return phone.match(phoneRegex) ? true : false;                              // If pattern matches return true, false if not
};

// Main init function, sets off the whole process.
const init = function() {
    prompt().then(promptActions)
            .then(employeeList => pageBuilder(employeeList))
            .then(pageHTML => writeFile(pageHTML))
            .then(writeFileResponse => {
                console.log(writeFileResponse);
                return copyFile();
            }).then(copyFileResponse => {
                console.log(copyFileResponse);
            }).catch(err => { console.log(err) });
                
};

// Call init
init();