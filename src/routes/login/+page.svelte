<script>
    import { getUsernameFromAuthKey } from '$lib/api';
    import Swal from 'sweetalert2';
    import sha256 from 'js-sha256';
  
    let newUsername = '';
    let newPassword = '';
  
    async function fetchUsername(authKey) {
      try {
        const response = await getUsernameFromAuthKey(authKey);
        return response;
      } catch (error) {
        console.error('Error fetching username:', error);
        return null;
      }
    }
  
    async function login() {
      console.log(sha256('rizz'));
      const encryptedPassword = sha256(newPassword);
      const authKey = `${newUsername}@${encryptedPassword}`;
      const username = await fetchUsername(authKey);
  
      if (username === newUsername) {
        Swal.fire({
          icon: 'success',
          title: 'Login Successful',
          text: `Welcome, ${username}!`
        });
        newUsername = '';
        newPassword = '';
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          text: 'Invalid username or password.'
        });
      }
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
    footer {
        text-decoration: aliceblue;
    }
  
    button:hover {
      background-color: #0056b3;
    }
  </style>
  
  <body style="height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
    <h2>Sign In</h2>
    <input bind:value={newUsername} placeholder="Username" />
    <input bind:value={newPassword} placeholder="Password" type="password" />
    <button on:click={login}>Sign In</button>
  </body>
  <footer>
    <a href="./signup">Sign Up</a>
  </footer>
  