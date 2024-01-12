let timer = document.getElementById("timer");
let quoteDisplayEl = document.getElementById("quoteDisplay");
let quoteInput = document.getElementById("quoteInput");
let result = document.getElementById("result");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById('spinner');

let count = 0
let start = setInterval(function() {
    count = count + 1
    timer.textContent = count + " Seconds"
}, 1000)

let opt = {
    method: "GET"
}
fetch("https://apis.ccbp.in/random-quote", opt)
    .then(function(response) {
        return response.json()
    })
    .then(function(jsonData) {
        let data = jsonData
        quoteDisplayEl.textContent = data.content
    })

function sendrequest() {
    if (quoteInput.value === quoteDisplayEl.textContent) {
        result.textContent = "You typed In " + count + " seconds"
    } else {
        result.textContent = "You typed WRONG"
    }
}

function cancle() {
    count = 0
    result.textContent = ""
    quoteInput.value = ""
}

resetBtn.addEventListener("click", cancle)
submitBtn.addEventListener("click", sendrequest)