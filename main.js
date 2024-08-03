document.getElementById("toast-green").style.display = 'none'
document.getElementById("toast-red").style.display = 'none'
const displaySecretKey = document.getElementById("secret-key");
const displayInput = document.getElementById("display-input");

function generateSecretKey() {
    const secretKey = Math.floor(100000 + Math.random() * 900000);
    displaySecretKey.innerText = secretKey;
}

function appendNumber(number) {
    const pin = displayInput.innerText;
    if(pin == "0") {
        displayInput.innerText = number;
    } else if(pin.length < 6) {
        displayInput.innerText += number;
    }
}

function deleteLast() {
    const pin = displayInput.innerText;
    if(pin.length == 1) {
        displayInput.innerText = "0";
    } else {
        displayInput.innerText = displayInput.innerText.slice(0, -1);
    }
}

function clearInput() {
    displayInput.innerText = "0";
    document.getElementById("toast-green").style.display = 'none'
    document.getElementById("toast-red").style.display = 'none'
}

function submitPIN() {
    const pin = displayInput.innerText;
    const secretKey = displaySecretKey.innerText;
    if (pin === secretKey) {
        document.getElementById("toast-green").style.display = 'grid'
        document.getElementById("toast-red").style.display = 'none'
    } else {
        document.getElementById("toast-red").style.display = 'grid'
        document.getElementById("toast-green").style.display = 'none'
    }
}