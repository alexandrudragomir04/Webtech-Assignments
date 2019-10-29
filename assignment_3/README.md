# Modify `Employee` and `SoftwareEngineer` classes from the `index.js` file to complete the following requirements:
- ### `Employee` objects should have the following properties: `name`, `surname`, `salary`;
- ### `Employee` class should contain a method called `getDetails` that will return a string resulted from the concatentation of the three properties. Example(Name Surname Salary)
- ### `SoftwareEngineer` class should inherit `Employee` class;
- ### `SoftwareEngineer` class should contain a property called `experience` that will be initialized with value `JUNIOR` if no value is provided when the object is created.
- ### Create applyBonus method in class SoftwareEngineer that will return the salary with a bonus applied based on experience:
    + ### JUNIOR will get a 10% bonus from their salary;
    + ### MIDDLE will get a 15% bonus from their salary;
    + ### SENIOR will get a 20% bonus from their salary;
    + ### If the employee has a different position than the ones mentioned above the bonus will be 10%;

# Instructions 
- ## Install [NodeLTS](https://nodejs.org/en/)
- ## Run `npm install` in the root directory;
- ## Evaluate yourself by using `npm test` command;