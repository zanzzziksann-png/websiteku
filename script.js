function login(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let pesan = document.getElementById("pesan");

    if (username === "admin" && password === "12345") {
        pesan.style.color = "green";
        pesan.innerHTML = "Login berhasil!";
    } else {
        pesan.style.color = "red";
        pesan.innerHTML = "Username atau password salah!";
    }
}

function kirimPesan(event) {
    event.preventDefault();

    alert("Pesan berhasil dikirim!");

    event.target.reset();
}