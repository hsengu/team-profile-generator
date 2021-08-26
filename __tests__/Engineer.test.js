const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Max', 1234567, 'max.man@email.com', 'Max_Man');

    expect(engineer.name).toBe('Max');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toMatch(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);      //RegEx match for most emails
    expect(engineer.github).toBe('Max_Man');
});

test("gets engineer's name", () => {
    const engineer = new Engineer('Max', 1234567, 'max.man@email.com', 'Max_Man');

    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));
});

test("gets engineer's id", () => {
    const engineer = new Engineer('Max', 1234567, 'max.man@email.com', 'Max_Man');

    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.id.toString()));
});

test("gets engineer's Email", () => {
    const engineer = new Engineer('Max', 1234567, 'max.man@email.com', 'Max_Man');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test("gets engineer's Role", () => {
    const engineer = new Engineer('Max', 1234567, 'max.man@email.com', 'Max_Man');

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});

test("gets engineer's GitHub", () => {
    const engineer = new Engineer('Max', 1234567, 'max.man@gmail.com', 'Max_Man');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));
});