const email = document.getElementById('userDetails');
const name = document.getElementById('userDetails');
const loginBtn = document.getElementById('login');

const database = firebase.database();
const usersRef = database.ref('/users');
loginBtn.addEventListener('click', e => {
  e.preventDefault();
  usersRef.child(email.value).set({
    name: name.value
  });
});
