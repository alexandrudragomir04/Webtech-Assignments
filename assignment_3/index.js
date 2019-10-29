const FIRST_NAME = "Dragomir";
const LAST_NAME = "Alexandru";
const GRUPA = "1075";


class Employee {

    constructor(name, surname, salary) {
        this.name = name;
        this.surname = surname;
        this.salary = salary;
    }

    getDetails() {
        return this.name + " " + this.surname + " " + this.salary;
    }
}

class SoftwareEngineer extends Employee {

    constructor(name, surname, salary, experience) {
        super(name, surname, salary);
        if (arguments[3] === undefined) {
            this.experience = "JUNIOR";
        } else this.experience = experience;
    }

    applyBonus() {
        let salary = this.salary;
        if (this.experience == 'JUNIOR') {
            salary = salary + salary * 0.1;
        } else if (this.experience == 'MIDDLE') {
            salary = salary + salary * 0.15;
        } else if (this.experience == "SENIOR") {
            salary = salary + salary * 0.2;
        } else salary = salary + salary * 0.1
        return salary;
    }

}

module.exports = {
    FIRST_NAME,
    LAST_NAME,
    GRUPA,
    Employee,
    SoftwareEngineer
}