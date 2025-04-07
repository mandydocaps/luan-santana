document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const CPF = document.getElementById("CPF").value;
    const email = document.getElementById("email").value;
    const cidade = document.getElementById("cidade").value;
    const estado = document.getElementById("estado").value;
    const message = document.getElementById("message");

    if (username === "amanda" && password === "777" && CPF === "123456789-0" && email === "amandajorgm@gmail.com" && cidade === "tapejara" && estado === "parana"){
        message.style.color= "green";
        message.textContent="login Bem sucedido!";

        setTimeout(() =>{
            window.location.href = "view.html";
        }, 1000)

    }else{
        message.style.color= "red";
        message.textContent="Usuario ou Senha incorretos";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000)
    }
});