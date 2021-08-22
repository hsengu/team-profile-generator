class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber
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
        return 'Manager';
    }
};

module.exports = Manager;