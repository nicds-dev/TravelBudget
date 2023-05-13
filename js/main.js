const form = document.getElementById('travelForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    const destination = formData.get('destination');
    const budget = formData.get('budget');
    const accommodation = formData.get('accommodation');
    const transport = formData.get('transport');
    const food = formData.get('food');

    console.log(destination, budget, accommodation, transport, food);

    calculateBudget(destination, budget, accommodation, transport, food);
})

const calculateBudget = (destination, budgetInitial, budgetAccommodation, budgetTransport, budgetFood) => {

    let valueExpenses = parseInt(budgetAccommodation) + parseInt(budgetTransport) + parseInt(budgetFood);

    let valueResult = budgetInitial - valueExpenses;

    console.log(valueExpenses, valueResult);

    showData(destination, budgetInitial, valueResult);
}

const showData = (destination, budgetInitial, valueResult) => {
    const dataDestination = document.getElementById('dataDestination');
    const dataBudget = document.getElementById('dataBudget');
    const dataTotal = document.getElementById('dataTotal');

    dataDestination.innerHTML = destination;
    dataBudget.innerHTML = budgetInitial;
    dataTotal.innerHTML = valueResult;
}