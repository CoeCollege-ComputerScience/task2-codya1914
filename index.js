function checkCard() {
    let number = document.getElementById("cardNumber").value;

    if (validateCard(number)) {
        document.getElementById("result").innerHTML = "Valid";
    } else {
        document.getElementById("result").innerHTML = "Invalid";
    }
}

function validateCard(cardNumber) {
    cardNumber = cardNumber.replace(/[\s-]/g, "");
    if (!/^\d+$/.test(cardNumber)) {
        return false;
    }

    var sum = 0;
    var doubleDigit = false;

    for (var i = cardNumber.length - 1; i >= 0; i--) {

        var digit = Number(cardNumber[i]);
        if (doubleDigit) {
            digit = digit * 2;

            if (digit > 9) {
                digit = digit - 9;
            }
        }

        sum = sum + digit;
        doubleDigit = !doubleDigit;
    }
    return sum % 10 === 0;
}