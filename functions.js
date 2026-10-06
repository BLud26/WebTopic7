function shout(text) {
    let shouty_text = text.toUpperCase() + '!!!!'
    return shouty_text
}

console.log(shout('hello world'))
let message = shout('hello Web')

console.log(message)

function f_to_c(f, decimalPlaces) {
    let celsius = (f - 32) *5 / 9
    if (decimalPlaces) { // undefined values are considered to be false
        // undefined is a falsy value
        return celsius.toFixed(2)
    } else {
        return celsius
    }

}

let todayTemp = 75
todayCelsius = f_to_c(todayTemp)
console.log(todayCelsius)
