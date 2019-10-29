const app = require('../index');
const Employee = app.Employee;
const SoftwareEngineer = app.SoftwareEngineer;

beforeAll(() => {
    try {
        if (app.FIRST_NAME.length < 3 && app.LAST_NAME.length < 3 && app.GRUPA.length !== 4) {
            throw new Error('Student details are not completed');
        }
    } catch (err) {
        //You must complete the student details first
        process.exit(1);
    }
})

describe('Testing initCache function', () => {
    test('Employee objects should have the following properties: name, surname, salary', (done) => {
        const employee = new Employee();
        expect(Object.getOwnPropertyNames(employee).find(property => property === 'name')).toBe('name');
        expect(Object.getOwnPropertyNames(employee).find(property => property === 'surname')).toBe('surname');
        expect(Object.getOwnPropertyNames(employee).find(property => property === 'salary')).toBe('salary');
        done();
    });
    test(`Employee class should contain a method called getDetails that will return a string resulted from the concatentation of the three properties. Example(Name Surname Salary)`, (done) => {
        const employee = new Employee('John', 'Doe', 3000);
        expect(employee.getDetails()).toBe('John Doe 3000');
        done();
    })
    test('SoftwareEngineer class should inherit Employee class', (done) => {
        const softwareEngineer = new SoftwareEngineer();
        expect(softwareEngineer).toBeInstanceOf(Employee);
        done();
    });
    test(`SoftwareEngineer class should contain a property called experience that will be initialized with 'JUNIOR' if no value is provided when the object is created.`, (done) => {
        const softwareEngineer = new SoftwareEngineer();
        expect(Object.getOwnPropertyNames(softwareEngineer).find(property => property === 'experience')).toBe('experience');
        expect(softwareEngineer.experience).toBe('JUNIOR');
        done();
    });

    test(`Create applyBonus method in class SoftwareEngineer that will return the salary with a bonus applied based on experience:
        - JUNIOR will get a 10% bonus from their salary;
        - MIDDLE will get a 15% bonus from their salary;
        - SENIOR will get a 20% bonus from their salary;
        - If the employee has a different position than the ones mentioned above the bonus will be 10%;
    `, (done) => {
        const softwareEngineer = new SoftwareEngineer('John', 'Doe', 1000, 'JUNIOR');
        expect(softwareEngineer.applyBonus()).toBe(1100);
        softwareEngineer.experience = 'MIDDLE';
        expect(softwareEngineer.applyBonus()).toBe(1150);
        softwareEngineer.experience = 'SENIOR';
        expect(softwareEngineer.applyBonus()).toBe(1200);
        softwareEngineer.experience = 'EXPERT';
        expect(softwareEngineer.applyBonus()).toBe(1100);
        done();
    });
})