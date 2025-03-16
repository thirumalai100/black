// SIGNUP FUNCTION
document.getElementById("signupForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find(user => user.username === username)) {
        alert("⚠️ Username already exists! Try another.");
        return;
    }

    users.push({ username, password });
    localStorage.setItem("users", JSON.stringify(users));

    alert("✅ Signup successful! You can now log in.");
    window.location.href = "login.html";
});

// LOGIN FUNCTION
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (!user) {
        alert("❌ Invalid login! Check username and password.");
        return;
    }

    localStorage.setItem("loggedInUser", username);
    alert(`✅ Welcome, ${username}!`);
    window.location.href = "dashboard.html";
});

// CHECK LOGIN STATUS
function checkLogin() {
    if (!localStorage.getItem("loggedInUser")) {
        window.location.href = "login.html";
    }
}

// LOGOUT FUNCTION
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("🔒 Logged out successfully.");
    window.location.href = "login.html";
}
