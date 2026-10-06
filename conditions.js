// pre-requisites for Android programming - C# or Java

let takenCSharp = false
let takenJava = true

if (takenCSharp || takenJava) {
    console.log('You meet the pre-requisites for Android')
} else {
    console.log('You must take C# or Java before Android')
}

// new section

let age = 40
let usCitizenTime = 5
let stateOfResidence = 'Wisconsin'
let stateWantToRepresent = 'Wisconsin'

if (age >= 30 && usCitizenTime >= 9 && stateOfResidence === stateWantToRepresent) {
    console.log('You are eligible to be a senator')
} else {
    console.log('You cannot be a senator')
}

// falsy values - undefined, null, empty lists, empty objects, 0, false
if ('' === 0) {
    console.log('the same!')
} else {
    console.log('different')
}