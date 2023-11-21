function Validaformulario() {
    const nome = document.getElementById("nome").value;
    const email = document.querySelector('#email').value;
    const senha = document.getElementById("senha").value


    if (nome == '' || email == '' || senha == "") {
        alert("preencha os campos vazios!")
    }
    const emailregex = /^[^\s@]+@[^\s@] +\.[^\s@]+$/
    if (emailregex.test(email)) {
        alert("Digite um e-mail valido!")
    }

    if (senha.length < 8) {
       

    }
    alert("cadastro foi realizado com sucesso!")
}
function darkmode(){
  const pagina = document.body
  PageTransitionEvent.classList.togglw(dark-mode)
   const botao = document.querySelector("button")
   const isDarkMode = document.body.classList.contains("dark-mode")
   if(isDarkMode == true){
    botao.textContent = "Modo Claro"
   }else{
    botao.textContent = "Modo Escuro"
   }


  }


  

