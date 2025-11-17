function createUser() {
    const user = {
        name: document.getElementById("name").value.trim(),
        age: document.getElementById("age").value,
        email: document.getElementById("email").value.trim(),
        theme: document.getElementById("theme").value,
 
    };

    if (!validateUser(user)) {
        return ;
    } else {
    
    localStorage.setItem(user.email, JSON.stringify(user))
        alert(`Perfil salvo com sucesso!`);
    }

}

function deleteUser(email) {
        if (!validateEmail(email)) {        
        return;
    }

    const user = localStorage.getItem(email.value);

    if (!user) {
        alert("Usuário não cadastrado!");
        localStorage.setItem("temporary_email", null);
        window.location.href = "perfil.html";
    

    } else {

     localStorage.removeItem(email.value);

    alert(`Perfil removido !`);

    localStorage.setItem(email, null);

    window.location.href='index.html';

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

function initProfile() {
    const emailTemp = localStorage.getItem("temporary_email");
    console.log(emailTemp);

    if (!emailTemp) {
        console.error("Nenhum email temporário encontrado.");
        return;
    }
    const user = JSON.parse(localStorage.getItem(emailTemp));

    document.getElementById("email").value = user.email;
    document.getElementById("name").value = user.name;
    document.getElementById("age").value = user.age;
    document.getElementById("theme").value = user.theme;
}

const themeSelect = document.getElementById('theme');
const body = document.body;
const localStorageKey = 'themePreference';

function applyTheme(theme) {
    if (theme === 'light') {
        body.classList.remove('sepia');
        body.classList.remove('dark');
        body.classList.remove('amoled');
        body.classList.add('light');
            
    }  if (theme === 'sepia') {
        body.classList.remove('dark');
        body.classList.remove('light');
        body.classList.remove('amoled');
        body.classList.add('sepia');

    }  if (theme === 'amoled') {
        body.classList.remove('dark');
        body.classList.remove('light');
        body.classList.remove('sepia');
        body.classList.add('amoled');
    }
     else {
        
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem(localStorageKey);
    
    if (savedTheme) {
        themeSelect.value = savedTheme;
        applyTheme(savedTheme);
    }
}

themeSelect.addEventListener('change', function() {
        const selectedTheme = this.value;

        localStorage.setItem(localStorageKey, selectedTheme);
        applyTheme(selectedTheme);
    
});

loadTheme();

const fontSelect = document.getElementById('font');
const bodyFont = document.bodyFont;
const localStorageKeyFont = 'fontPreference';

function applyFont(font) {
    if (font === 'root') {
        body.classList.remove('highcontrast');
        body.classList.remove('dark');
        body.classList.add('root');
            
    }  if (font === 'highcontrast') {
        body.classList.remove('dark');
        body.classList.remove('light');
        body.classList.add('highcontrast');

    }
     else {
        
    }
}

function loadColorFont() {
    const savedFont = localStorage.getItem(localStorageKeyFont);
    
    if (savedFont) {
        fontSelect.value = savedFont;
        applyFont(savedFont);
    }
}

fontSelect.addEventListener('change', function() {
        const selectedFont = this.value;

        localStorage.setItem(localStorageKeyFont, selectedFont);
        applyFont(selectedFont);
    
});

loadColorFont();

object.addEventListener("load", initProfile);
