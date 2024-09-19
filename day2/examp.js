// Function to fetch random user data from the Random User API
function getRandomUser() {
    const apiUrl = 'https://randomuser.me/api/';

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Extracting the user data
            const user = data.results[0];
            const firstName = user.name.first;
            const lastName = user.name.last;
            const email = user.email;

            // Updating the HTML content with user data
            document.getElementById('user-name').textContent = `First Name: ${firstName}`;
            document.getElementById('user-lname').textContent = `Last Name: ${lastName}`;
            document.getElementById('user-email').textContent = `Email: ${email}`;
        })
        .catch(error => {
            console.error('Error fetching user data:', error);
        });
}
