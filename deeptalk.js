window.onload = function () {
    // Check if sessionStorage has the authentication flag
    if (sessionStorage.getItem("authenticated") !== "true") {
        window.location.href = "index.html"; // Redirect to login page if not authenticated
    }
};
