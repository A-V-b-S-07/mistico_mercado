const connection = require("../src/db.config");

var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");

var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})


let menu = document.querySelector("#div1")
let botaomenu = document.querySelector(".menu")
let fechar2 = document.querySelector("#fechar-modal")

botaomenu.addEventListener("click", (e) =>{
    menu.style.display = "flex"
  })
  fechar2.addEventListener("click", (e) =>{
    menu.style.display = "none"
  })

  async function cadastrar(event){
    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;

    const data = {
        nome,
        email,
        senha
    }

    console.log(data);

    const response = await fetch('http://localhost:3007/usuarios/cadastrar', {
        method: "POST",
        headers: {
            "Content-Type":"application/json"
        },
        body: JSON.stringify(data)
    })

    const results = await response.json();

    if(results.success){
        console.log(results)
        alert(results.message)
    }else{
        alert(results.message)

    }
}
 
