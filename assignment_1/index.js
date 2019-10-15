
const FIRST_NAME = "Alexandru";
const LAST_NAME = "Dragomir";
const GRUPA = "1075";
function numberParser(value){if ((value === NaN) || (!isFinite(value)) || (value > Number.MAX_SAFE_INTEGER) || (value < Number.MIN_SAFE_INTEGER)) {return NaN} return parseInt(value)}
function dynamicPropertyChecker(input, property) {  
}
module.exports = {
    FIRST_NAME,
    LAST_NAME,
    GRUPA,
    numberParser
}

