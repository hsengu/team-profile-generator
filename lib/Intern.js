class Intern {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
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
};

module.exports = Intern;