const billAmountElement = document.querySelector("#bill");
const tipPercentageElement = document.querySelector("#tip");

function calculateTotal() {
  const billValue = parseFloat(billAmountElement.value);
  const tipValue = parseFloat(tipPercentageElement.value);

  const totalValue = billValue * (1 + tipValue / 100);

  if (isNaN(billValue) || isNaN(tipValue)) {
    document.querySelector(".total").innerHTML = "Please input a value";
    return;
  }

  displayTotal(totalValue);
}

function displayTotal(totalValue) {
  document.querySelector(
    ".total"
  ).innerHTML = `Total bill: $${totalValue.toFixed(2)}`;
}
