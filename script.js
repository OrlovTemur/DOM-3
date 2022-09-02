let counter = document.querySelector('.counter')
let count = 0

function changeCounter(button) {
    if(button == plus) {
        count += 1
    } else if(button == minus) {
        count -= 1
    } else if(button == reset) {
        count = 0
    } else if(button == pisyat) {
        count += 50
    } else if(button == dvacacpyat) {
        count += 25
    } else if(button == desyat) {
        count += 10
    }

    counter.innerHTML = count
}
