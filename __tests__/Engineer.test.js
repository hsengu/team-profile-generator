const Engineer = require('../lib/Engineer.js');

test('creates an engineer object', () => {
    const engineer = new Engineer('Max', 1234567, 'max.man@email.com');

    expect(engineer.name).toBe('Max');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toMatch(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
});

test("gets engineer's name", () => {
    const engineer = new Engineer('Max', 1234567, 'max.man@email.com');

    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));
});

test("gets engineer's id", () => {
    const engineer = new Engineer('Max', 1234567, 'max.man@email.com');

    expect(engineer.getId()).toEqual(expect.stringContaining(engineer.Id.toString()));
});

test("gets engineer's Email", () => {
    const engineer = new Engineer('Max', 1234567, 'max.man@email.com');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));
});

test("gets engineer's Role", () => {
    const engineer = new Engineer('Max', 1234567, 'max.man@email.com');

    expect(engineer.getEmail()).toEqual(expect.stringContaining('Engineer'));
})