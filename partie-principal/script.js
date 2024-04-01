let cookie = document.getElementById('cookie')
let counter = document.getElementById('counter')
let start = document.getElementById('start')
let clickcounter = 0
let clickValue = 1
let autoClickerIntervalle

function increaseCookie() {
    clickcounter += clickValue
    counter.textContent = clickcounter
}

function buyUpgrade(am, k, type) {
    if (clickcounter >= Number(k.querySelector("span").innerHTML)) {
        clickcounter -= Number(k.querySelector("span").innerHTML)
        counter.textContent = clickcounter
        switch (type) {
            case 1:
                clickValue += am
                k.querySelector("span").innerHTML = Math.floor(Number(k.querySelector("span").innerHTML) * 1.25)
                break;
            case 2:
                cookie.click()
                k.querySelector("span").innerHTML = Math.floor(Number(k.querySelector("span").innerHTML) * 1.25)
                setInterval(() => {
                    cookie.click()
                }, 500)
                break;
            default:
                break;
        }
    } else {
        alert('ta pas assez d argent alors fait le rat economise')
    }
}