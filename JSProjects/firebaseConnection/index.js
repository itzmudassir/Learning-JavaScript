// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA52G_JvsgmqXmJBUW2KcGNjpcKgAkhk_c",
    authDomain: "smart-farming-v4.firebaseapp.com",
    databaseURL: "https://smart-farming-v4-default-rtdb.firebaseio.com",
    projectId: "smart-farming-v4",
    storageBucket: "smart-farming-v4.appspot.com",
    messagingSenderId: "68614971167",
    appId: "1:68614971167:web:14eb37c378d1e684259a2a",
    measurementId: "G-7KWQRNF1MK"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Set database variable
var database = firebase.database()

function save() {
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value
  var username = document.getElementById('username').value
  var say_something = document.getElementById('say_something').value
  var favourite_food = document.getElementById('favourite_food').value

  database.ref('users/' + username).set({
    email : email,
    password : password,
    username : username,
    say_something : say_something,
    favourite_food : favourite_food
  })

  alert('Saved')
}

function get() {
  var username = document.getElementById('username').value

  var user_ref = database.ref('users/' + username)
  user_ref.on('value', function(snapshot) {
    var data = snapshot.val()

    alert(data.email)

  })

}

function update() {
  var username = document.getElementById('username').value
  var email = document.getElementById('email').value
  var password = document.getElementById('password').value

  var updates = {
    email : email,
    password : password
  }

  database.ref('users/' + username).update(updates)

  alert('updated')
}

function remove() {
  var username = document.getElementById('username').value

  database.ref('users/' + username).remove()

  alert('deleted')
}