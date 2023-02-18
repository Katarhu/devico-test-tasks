// TASK #2
// Write a function that replaces all ones with zeros and vice versa for the object

const invertValue = (value) => {
    if (typeof value !== "number" || !Number.isFinite(value)) {
        return 0;
    }

    return value === 0 ? 1 : 0;
}

const foo = (object) => {
    if (typeof object.left === "object") {
        object.left = foo(object.left);
    } else {
        object.left = invertValue(object.left);
    }

    if (typeof object.right === 'object') {
        object.right = foo(object.right);
    } else {
        object.right = invertValue(object.right);
    }

    return object;
}

const d = {
    left: {
        left: {
            left: 1,
            right: {
                left: 0,
                right: 1,
            },
        },
        right: {
            left: 0,
            right: 1,
        },
    },
    right: 0,
};

foo(d);
console.log(d);