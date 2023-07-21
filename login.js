document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const formData = new FormData(loginForm);
        const data = {
            username: formData.get('username'),
            password: formData.get('password')
        };

        // Send data to the server for authentication (this requires backend implementation).
        // You can use fetch or AJAX to make the request.

        // For this example, assume the user is authenticated and redirect to the dashboard.
        window.location.href = '/dashboard/home/';
    });
});
