document.getElementById("toast").style.display = 'none';
const displaySecretKey = document.getElementById("secret-key");
const displayInput = document.getElementById("display-input");

function generateSecretKey() {
    const secretKey = Math.floor(100000 + Math.random() * 900000);
    displaySecretKey.innerText = secretKey;
}

function appendNumber(number) {
    const pin = displayInput.innerText;
    if (pin.length < 6) {
        displayInput.innerText += number;
    }

}

function deleteLast() {
    displayInput.innerText = displayInput.innerText.slice(0, -1);
}

function clearInput() {
    displayInput.innerText = "";
    document.getElementById("toast").style.display = 'none'
}

function submitPIN() {
    const pin = displayInput.innerText;
    const secretKey = displaySecretKey.innerText;
    document.getElementById("toast").style.display = 'block'
    if (pin === secretKey) {
        document.getElementById("icon").src = './assets/right.png';
        document.getElementById("notify").innerText = 'Right';
    } else {
        document.getElementById("icon").src = './assets/wrong.png';
        document.getElementById("notify").innerText = 'Wrong';
    }
}