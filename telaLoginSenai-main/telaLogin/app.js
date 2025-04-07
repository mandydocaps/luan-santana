document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (username === "amanda" && password === "777"){
        message.style.color= "green";
        message.textContent="login Bem sucedido!";

        setTimeout(() =>{
            window.location.href = "view luan.html";
        }, 1000)

    }else{
        message.style.color= "red";
        message.textContent="Usuario ou Senha incorretos";

        setTimeout(() => {
            window.location.href = "index luan.html";
        }, 1000)
    }
});