/**
 * 
 */

async function fetchUsers(){
	const response = await fetch('http://localhost:8080/demo/all');
    const users = await response.json();
    return users;
}
 // Function to display users in the HTML page
async function displayUsers() {	
	const userListElement = document.getElementById('userList');
    const users = await fetchUsers();
	// Clear existing user list
	userListElement.innerHTML = '';
	// Iterate over users and create list items
    users.forEach(user => {
    const listItem = document.createElement('li');
    listItem.textContent = `Name: ${user.name}, Email: ${user.email}`;
    userListElement.appendChild(listItem);
    });
}