class Intern {
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    getName() {
        if(this.name)
            return this.name;
    }

    getId() {
        if(this.id)
            return this.id.toString();
    }

    getEmail() {
        if(this.email)
            return this.email;
    }

    getRole() {
        return 'Intern';
    }

    getSchool() {
        if(this.school)
            return this.school
    }
};

module.exports = Intern;