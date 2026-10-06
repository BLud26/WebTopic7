let user = { username: 'ben', password: 'puppy'}
console.log(user["username"])
console.log(user.username)

console.log(user["password"])
console.log(user.password)

let whatProperty = 'password'
console.log(user[whatProperty])

let usernameProperty = 'username'
console.log(user[usernameProperty])

user.password = 'elephant'
console.log(user)

user['password'] = 'alligator'
console.log(user)

user.email = 'ben@ludowise.com'
console.log(user)
console.log(user.email)



// Create the user object
let person = {
    name: 'Ben Ludowise',
    email: 'ben@ludowise.com',
    password: 'fake',
    contact: {
        phone: '555-123-4567',
        address: '123 Main St',
        roles: ['software architect']
    }
}

// Add a salary attribute, as a number
person.salary = 250000

// Add "server admin" to roles
person.contact.roles.push('server admin');

// Add the office location to the contact object
person.contact.location = 'Minneapolis'

console.log(person);