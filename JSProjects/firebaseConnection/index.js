// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB4OEx5_lKofMW0FpZccGX4wS_GpqNxgb8",
    authDomain: "wrud-84d66.firebaseapp.com",
    projectId: "wrud-84d66",
    storageBucket: "wrud-84d66.appspot.com",
    messagingSenderId: "273588724413",
    appId: "1:273588724413:web:cfe671b4efd8129b01cdd4"
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