$scope.submitLogin = function() {
    var loginData = {
        email: $scope.email,
        password: $scope.password
    };

    console.log('Login Data:', loginData); // Debugging line

    $http.post('https://iasf2025.onrender.com/api/login', loginData)
        .then(function(response) {
            alert('Login successful!');
            localStorage.setItem('token', response.data.token);
            window.location.href = 'welcome.html'; // Redirect to another page
        })
        .catch(function(error) {
            console.error('Error during login:', error);
            alert('Error during login: ' + (error.data ? error.data.message : error.message));
        });
};
