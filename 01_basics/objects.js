

const mysym = Symbol()

const JsUser = {
    name: 'John Doe',
    [mysym]: 'secret',
    age: 30,
    email: 'John@google.com',
    location: 'Miami',
    isLogged: false,
    "full name": "John Doe 2"

}


// console.log(JsUser);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mysym]);


JsUser.email = "mudassir@google.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)
JsUser.email = "mudasir@chat.com"
// console.log(JsUser.email);

JsUser.greeting = function () {
    console.log(`Hello ${this.name}`);
}

console.log(JsUser.greeting());
