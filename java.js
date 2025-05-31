const convertButton = document.querySelector(".Converter")
const currencySelect = document.querySelector(".currency-select")
function converterValores() {

    const inputCurrency = document.querySelector(".input-currency").value
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")// valor em real
    const currencyValueConverted = document.querySelector(".currency-value")// moedas

    console.log(currencySelect.value)


    const dolarDay = 6.0
    const euroDay = 6.2

    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrency / dolarDay)
    }
    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrency / euroDay)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrency)

}

function changeCurrency(){
    const currency = document.getElementById("Dólar-name")

    const currencyImg = document.querySelector('.currency-img')

    if(currencySelect.value == 'dolar'){
        currency.innerHTML = 'Dólar💵'
        currencyImg.src = './assets/usa.png'
    }
    if(currencySelect.value == 'euro'){
        currency.innerHTML = 'Euro💶'
        currencyImg.src ='./assets/euro.png'
    }

    converterValores()
}

convertButton.addEventListener("click", converterValores)
currencySelect.addEventListener("change", changeCurrency)