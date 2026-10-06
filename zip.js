function cityStateAddress(city, state) {
    let address = `${city}${state.toUpperCase()}`
    return address
}
console.log(cityStateAddress('Minneapolis,', ' mn'))
let address = cityStateAddress('Seattle,', ' WA')
console.log(address)
//
console.log()


function isMinnsotaZip(code) {
    // All Minnesota zip codes between 5501 and 56763
    if (code >= 55001 && code <= 56763) {
        return true
    } else {
        return false
    }
}

function validGPA(gpa) {
    if (gpa >= 0 && gpa <= 4) {
        return true
    } else {
        return false
    }
}

console.log(validGPA(5))
console.log(validGPA(3))
//
console.log()
//
console.log(isMinnsotaZip('55403'))
console.log(isMinnsotaZip('55001'))
console.log(isMinnsotaZip('9999999'))
console.log(isMinnsotaZip('56763'))
console.log(isMinnsotaZip('56764'))
console.log(isMinnsotaZip('-55347'))
//
console.log()
//
