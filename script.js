function logout(){
    // Clear login session (if used later)
    localStorage.clear();
    sessionStorage.clear();

    // Redirect to Login Page
    window.location.href = "index.html";
}
