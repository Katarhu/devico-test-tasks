
const OPERATORS = {
    PLUS: "+",
    MINUS: "-",
    MULTIPLY: "*",
    DIVIDE: "/",
}

const isValidNumber = (number) => typeof number === "number" && Number.isFinite(number);

const createCalc = (initialValue = 0) => {
    let accumulation = isValidNumber(initialValue) ? initialValue : 0;

    return (value, operator) => {
        if (!isValidNumber(value)) {
            console.log(`Value should be a valid number`);
            return;
        }

        if (!Object.values(OPERATORS).includes(operator)) {
            console.log(`There is no accepted operator as ${operator}`);
            return;
        }

        switch (operator) {
            case OPERATORS.PLUS:
                accumulation += value;
                break;
            case OPERATORS.MINUS:
                accumulation -= value;
                break;
            case OPERATORS.MULTIPLY:
                accumulation *= value;
                break;
            case OPERATORS.DIVIDE:
                accumulation /= value;
                break;
            default:
                break;
        }

        console.log(accumulation);
        return accumulation;
    }
}

const calc = createCalc();

calc(5, "+"); // 5
calc(2, "*"); // 10
calc(3, "-"); // 7
calc(2, "*"); // 14
calc(7, "/"); // 2
