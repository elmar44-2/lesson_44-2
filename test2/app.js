const rates = {
    usd: 87.0,
    eur: 93.0,
    cny: 12.0
};

function checkTitle() {
    const title = document.getElementById("title").innerText.trim();
    const content = document.getElementById("content");

    if (!title) {
        content.classList.add("hidden");
    } else {
        content.classList.remove("hidden");
    }
}

function convertCurrency() {
    const soms = parseFloat(document.getElementById("soms").value) || 0;

    document.getElementById("usd").innerText = soms ? (soms / rates.usd).toFixed(2) : "";
    document.getElementById("eur").innerText = soms ? (soms / rates.eur).toFixed(2) : "";
    document.getElementById("cny").innerText = soms ? (soms / rates.cny).toFixed(2) : "";
}