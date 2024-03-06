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
    
    const deleteButton = document.createElement("button")
    deleteButton.textContent="Delete"
    deleteButton.onclick=async function(){
		await deleteUser(user.id);
		await displayUsers();
	}
    
    listItem.appendChild(deleteButton)
    userListElement.appendChild(listItem);
    });
}
async function deleteUser(userId){
	//Perform deletion
	await fetch(`http://localhost:8080/demo/delete/${userId}`, {
            method: 'DELETE'});
}