const Employee = require('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Max', 1234567, 'max.man@email.com');

    expect(employee.name).toBe('Max');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toMatch(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
});

test("gets employee's name", () => {
    const employee = new Employee('Max', 1234567, 'max.man@email.com');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

test("gets employee's id", () => {
    const employee = new Employee('Max', 1234567, 'max.man@email.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id.toString()));
});

test("gets employee's Email", () => {
    const employee = new Employee('Max', 1234567, 'max.man@email.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

test("gets employee's Role", () => {
    const employee = new Employee('Max', 1234567, 'max.man@email.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
})