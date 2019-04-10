calculate = (node) => {
    const number1 = +document.querySelector('#screen1').value;
    const number2 = +document.querySelector('#screen2').value;
    const result = document.querySelector('#result');
    switch (node.innerHTML) {
        case '+':
            result.value = add(number1, number2);
            break;
        case '-':
            result.value = subtract(number1, number2);
            break;
        case '÷':
            try {
                result.value = divide(number1, number2);
            } catch (err) {
                result.value = err;
            }
            break;
        case 'x':
            result.value = multiply(number1, number2);
            break;
        default:
            result.value = 'Please choose a valid operation'
    }
};

const add = (number1, number2) => {
    return number1 + number2;
};

const subtract = (number1, number2) => {
    return number1 - number2;
};

const divide = (number1, number2) => {
    if (number2 !== 0) {
        return number1 / number2;
    } else {
        throw 'one does not simply divide through zero';
    }
};

const multiply = (number1, number2) => {
    return number1 * number2;
};

reset = () => {
    const number1 = document.querySelector('#screen1');
    const number2 = document.querySelector('#screen2');
    const result = document.querySelector('#result');

    number1.value = '';
    number2.value = '';
    result.value = '';
};

exports.add = add;
exports.subtract = subtract;
exports.divide = divide;
exports.multiply = multiply;
