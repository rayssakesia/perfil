// script.js (Lógica Compartilhada)
function createUser() {
    const user = {
        name: document.getElementById("name").value.trim(),
        age: document.getElementById("age").value,
        email: document.getElementById("email").value.trim(),
        theme: document.getElementById("userTheme").value,
        format: document.getElementById("userFormat").value,
        lang: document.getElementById("userLang").value
    };

    if (!validateUser(user)) {
        return ;
    } else {
    
    localStorage.setItem(user.email, JSON.stringify(user))
    }

}

function Logout (email) {
    const user = localStorage.getItem(email.value);

    alert(`Volte Sempre !`);

    localStorage.setItem(email, null);

    window.location.href='index.html';

}

function validateUser (user) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (user.name == null || user.name.length < 3) {
        alert("O nome não pode ser nulo e deve conter pelo menos 3 letras.");
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

function validateEmail (email) {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!isValid.test(email.value)) {
        alert("Digite um e-mail válido.");
        return;
    }
    return true;

}

function goToUserProfile(email) {

    if (!validateEmail(email)) {        
        return;
    }

    const user = localStorage.getItem(email.value);

    if (!user) {
        alert("Usuário não encontrado!");
        localStorage.setItem("temporary_email", null);
        window.location.href = "perfil.html";
    

    } else {

    localStorage.setItem("temporary_email", email.value);

    window.location.href = "perfil.html";
    }

}

function iniciarPerfil() {
    const emailTemp = localStorage.getItem("temporary_email");
    console.log(emailTemp);

    if (!emailTemp) {
        console.error("Nenhum email temporário encontrado.");
        return;
    }
    const user = JSON.parse(localStorage.getItem(emailTemp));

    console.log(user);

    document.getElementById("email").value = user.email;
    document.getElementById("name").value = user.name;
    document.getElementById("age").value = user.age;
    document.getElementById("userTheme").value = user.theme;
    document.getElementById("userFormat").value = user.format;
    document.getElementById("userLang").value = user.lang;
}

function showPage(p) {
  document.querySelectorAll('.page').forEach(div => div.style.display = 'none');
  document.getElementById('page' + p).style.display = 'block';
}

object.addEventListener("load", iniciarPerfil);