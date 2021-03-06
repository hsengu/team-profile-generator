const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Max', 1234567, 'max.man@email.com', "UC Berkeley");

    expect(intern.name).toBe('Max');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toMatch(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);     //RegEx match for most emails
    expect(intern.school).toBe('UC Berkeley');
});

test("gets intern's name", () => {
    const intern = new Intern('Max', 1234567, 'max.man@email.com', "UC Berkeley");

    expect(intern.getName()).toEqual(expect.stringContaining(intern.name));
});

test("gets intern's id", () => {
    const intern = new Intern('Max', 1234567, 'max.man@email.com', "UC Berkeley");

    expect(intern.getId()).toEqual(expect.stringContaining(intern.id.toString()));
});

test("gets intern's Email", () => {
    const intern = new Intern('Max', 1234567, 'max.man@email.com', "UC Berkeley");

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test("gets intern's Role", () => {
    const intern = new Intern('Max', 1234567, 'max.man@email.com', "UC Berkeley");

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});

test("gets intern's School", () => {
    const intern = new Intern('Max', 1234567, 'max.man@email.com', "UC Berkeley");

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});