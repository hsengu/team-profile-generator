const Intern = require('../lib/Intern.js');

test('creates an intern object', () => {
    const intern = new Intern('Max', 1234567, 'max.man@email.com');

    expect(intern.name).toBe('Max');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toMatch(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
});

test("gets intern's name", () => {
    const intern = new Intern('Max', 1234567, 'max.man@email.com');

    expect(intern.getName()).toEqual(expect.stringContaining(intern.name));
});

test("gets intern's id", () => {
    const intern = new Intern('Max', 1234567, 'max.man@email.com');

    expect(intern.getId()).toEqual(expect.stringContaining(intern.Id.toString()));
});

test("gets intern's Email", () => {
    const intern = new Intern('Max', 1234567, 'max.man@email.com');

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));
});

test("gets intern's Role", () => {
    const intern = new Intern('Max', 1234567, 'max.man@email.com');

    expect(intern.getEmail()).toEqual(expect.stringContaining('Intern'));
})