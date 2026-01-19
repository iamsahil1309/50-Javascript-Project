const firstCurrency = document.getElementById("currency-first");
const firstWorth = document.getElementById("worth-first");
const secondCurrency = document.getElementById("currency-second");
const secondWorth = document.getElementById("worth-second");
const exchangeRate = document.getElementById("exchange-rate");

updateCurrency()

firstCurrency.addEventListener("change", updateCurrency);
secondCurrency.addEventListener("change", updateCurrency);
firstWorth.addEventListener("input", updateCurrency);

function updateCurrency() {
  fetch(
    `https://v6.exchangerate-api.com/v6/e2e4ae60c1c2c37ac6103ac0/latest/${firstCurrency.value}`,
  )
    .then((res) => res.json())
    .then((data) => {
        const rate = data.conversion_rates[secondCurrency.value]
        secondWorth.value = (firstWorth.value * rate).toFixed(2)
        // console.log(rate)
        exchangeRate.innerText = `1 ${firstCurrency.value} = ${rate + " " + secondCurrency.value}`
    });
}
