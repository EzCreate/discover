<script>
    import { getUsers, getProjects, getUsernameFromAuthKey, createUser, assignPfp } from '$lib/api';
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
  </script>
  
  <style>
    body {
      background-color: #222;
      color: #fff;
      font-family: Arial, sans-serif;
      padding: 20px;
    }
  
    body, footer {
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
  </style>
  
  <body style="height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <h2>Create Account</h2>
    <input bind:value={newUsername} placeholder="New Username" />
    <input bind:value={newPassword} placeholder="New Password" type="password" />
    <button on:click={registerUser}>Create User</button>
  </body>
  <footer>
    <a href="./login">Sign In</a>
  </footer>
  