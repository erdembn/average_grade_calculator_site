const button = document.querySelector('#calculate');
const input = document.querySelector('#grades');
let result = document.querySelector('#average');
let reset = document.querySelector('button#reset');
button.addEventListener('click', () => {
    const items = input.value;
    const array = separateItems(items);
    const average = calculateAverage(array);
    if (isNaN(average)) {
        result.textContent = 'Please enter valid numbers';
    }
    else {
        result.textContent = average;
    }
    console.log(average);
});


function separateItems(items) {

    let array = items.split(",")

    return array;
}


function calculateAverage(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        numbers[i].trim();
        numbers[i] = parseFloat(numbers[i]);
        sum += numbers[i];
    }
    return sum / numbers.length;
}

reset.addEventListener('click', () => {
    input.value = '';
    result.textContent = '';
});
