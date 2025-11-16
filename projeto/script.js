// script.js (Lógica Compartilhada)
function createUser() {
    const user = {
        name: document.getElementById("name").value.trim(),
        age: (document.getElementById("age").value),
        email: document.getElementById("email").value.trim(),
        theme: document.getElementById("userTheme").value,
        format: document.getElementById("userFormat").value,
        lang: document.getElementById("userLang").value
    };

    if (!validateUser(user)) {
        return ;
    } else {
    
    const userText = `Usuario criado com sucesso!
    nome: ${user.name}, 
    idade:${user.age}, 
    email:${user.email}, 
    theme:${user.theme}, 
    formatação:${user.format}, 
    idioma:${user.lang}`;

    localStorage.setItem("user", userText);
    document.getElementById("saida").textContent = userText;
    }

}

function validateUser (user) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (user.name == null || user.name.length < 5) {
        alert("O nome não pode ser nulo e deve conter pelo menos 5 letras.");
        return;
    }
     if (user.age < 1 || user.age > 120 || isNaN(user.age)) {
        alert("Digite uma idade válida.");
        return;

    }  if (!emailRegex.test(user.email)) {
        alert("Digite um e-mail válido.");
        return;
    }

    return true;

}

function getUser (email) {
    localStorage.getElementById(email);
    document.getElementById("saida").textContent = userText;
}


function showPage(p) {
  document.querySelectorAll('.page').forEach(div => div.style.display = 'none');
  document.getElementById('page' + p).style.display = 'block';
}
