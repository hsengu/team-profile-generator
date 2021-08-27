class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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
        return 'Engineer';
    }

    getGithub() {
        if(this.github)
            return this.github;
    }
};

module.exports = Engineer;