const apiUrl = 'http://localhost:3000/';

export async function getUsers() {
    const response = await fetch(`${apiUrl}api/v1/getusers`);
    const data = await response.json();
    return JSON.stringify(data); 
}


export async function getProjects() {
  const response = await fetch(`${apiUrl}api/v1/getprojects`);
  return await JSON.stringify(response.json());
}

export async function getUsernameFromAuthKey(authKey) {
  const response = await fetch(`${apiUrl}api/v1/getusernamefromauthkey`, {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: authKey
  });
  return await response.text();
}

export async function createUser(username, password) {
  const data = { [username]: password };
  const response = await fetch(`${apiUrl}api/v1/createuser`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await response.text();
}

export async function assignPfp(username, pfpId) {
  const data = { [username]: pfpId };
  const response = await fetch(`${apiUrl}api/v1/assignpfp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}

export async function getPfp(username) {
  const data = { [username]: 'dosent matter what goes here' };
  const response = await fetch(`${apiUrl}api/v1/getpfp`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await response.json();
}
