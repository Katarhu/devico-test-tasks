
const OPERATORS = {
    PLUS: "+",
    MINUS: "-",
    MULTIPLY: "*",
    DIVIDE: "/",
}

const createCalc = (initialValue = 0) => {
    let accumulation = typeof initialValue === 'number' ? initialValue : 0;

    return (value, operator) => {
        if (typeof value !== "number") {
            console.log(`value should be number, ${typeof value} given`);
            return;
        }

        if (!Object.values(OPERATORS).includes(operator)) {
            console.log(`There is no accepted operator as ${operator}`);
            return;
        }

        if (isNaN(value)) {
            console.log(`Invalid value, accumulation: ${accumulation}`);
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
