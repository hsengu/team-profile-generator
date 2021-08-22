const Manager = require('../lib/Manager.js');

test('creates an manager object', () => {
    const manager = new Manager('Max', 1234567, 'max.man@email.com');

    expect(manager.name).toBe('Max');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toMatch(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
});

test("gets manager's name", () => {
    const manager = new Manager('Max', 1234567, 'max.man@email.com');

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
});

test("gets manager's id", () => {
    const manager = new Manager('Max', 1234567, 'max.man@email.com');

    expect(manager.getId()).toEqual(expect.stringContaining(manager.id.toString()));
});

test("gets manager's Email", () => {
    const manager = new Manager('Max', 1234567, 'max.man@email.com');

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test("gets manager's Role", () => {
    const manager = new Manager('Max', 1234567, 'max.man@email.com');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})