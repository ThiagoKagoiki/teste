function loginSenha(){
    let login, senha 
    login = document.getElementById("login".toLowerCase()).value
    senha = document.getElementById("senha".toLowerCase()).value
    if(login!="thiago" || senha!="09092006"){
        alert("Login ou senha incorreta")
    }else{
        alert("Parabens! Você irá comprar o rolo de corda do Thiago!")
    }
}