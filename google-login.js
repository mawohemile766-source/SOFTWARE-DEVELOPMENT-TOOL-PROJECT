function handleCredentialResponse(response) {
    const idToken = response.credential;

fetch("http://localhost:3000/google-login", {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify({idToken})
    })
    .then(res => res.json())
    .then(data => {
        if(data.sucess){
            console.login("Login successful: ", data.user);
        } else {
            console.log("Login failed");
        }
    });
}