<script>
    import { getUsers, getProjects, getUsernameFromAuthKey, createUser, assignPfp } from '$lib/api';
    import { get } from 'svelte/store'
    import { preferences } from '$lib/stores'
    import Swal from 'sweetalert2'
  
    let users = [];
    let projects = [];
    let username = '';
    let authKey = '';
    let newUsername = '';
    let newPassword = '';
    let pfpId = '';
  
    async function loadUsers() {
      users = await getUsers();
    }
  
    async function loadProjects() {
      projects = await getProjects();
    }
  
    async function fetchUsername() {
      username = await getUsernameFromAuthKey(authKey);
    }
  
    async function registerUser() {
      const response = await createUser(newUsername, newPassword);
      Swal.fire(response);
      loadUsers();
    }
  
    async function updatePfp() {
      const response = await assignPfp(newUsername, pfpId);
      console.log(response);
    }
    const user = fetchUsername(get(preferences));


  </script>
  
  <style>
    body {
        background-color: #222;
        color: #fff;
        font-family: Arial, sans-serif;
        padding: 20px;
    }
    p {
        font-size: larger;
    }
    a {
        font-size: x-large;
    }
    footer {
        max-width: 400px;
        margin: auto;
    }
    h2 {
        font-size: 24px;
        margin-bottom: 16px;
    }
    input {
        width: 100%;
        padding: 10px;
        margin-bottom: 10px;
        border: 1px solid #444;
        border-radius: 4px;
        font-size: 16px;
        background-color: #333;
        color: #fff;
    }
    input::placeholder {
        color: #bbb;
    }
    button {
        background-color: #007bff;
        color: white;
        border: none;
        padding: 12px 20px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        border-radius: 4px;
        cursor: pointer;
    }
    button:hover {
        background-color: #0056b3;
    }
    .center-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }
</style>
  
  <body style="height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <h2>Profile</h2>
    <img src="./pfps/1.svg" alt="pfp">
    <p><i>If the username of you're account dosen't appear try logging in.</i></p>
    <p>{user}</p>
    <p>Custom profile support is still in the works, check back soon!</p>
  </body>
  <footer>
    <a href="./login">Sign In</a>
  </footer>
  