const header = document.querySelector("header");

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};




// Traductor Api Google ocultar y mostrar 

/* -------------------- Codigo que desaparece 0.5s el nav ------------------- */

var miEtiqueta = document.getElementById("ul");

        function desaparecerYReaparecer() {
            miEtiqueta.style.display = "none"; // Oculta la etiqueta
            setTimeout(function() {
                miEtiqueta.style.display = "block"; // Vuelve a mostrar la etiqueta después de 0.5 segundos
            }, 500); // 500 milisegundos (0.5 segundos)
        }


/* ---------------------- codigo completo de translate ---------------------- */

function toggleDiv() {
    var div = document.getElementById("google_translate_element");

    if (div.style.display === "none" || div.style.display === "") {
        div.style.display = "block"; 

        navbar.style.display = 'none';
    } else {
        div.style.display = "none"; 
        

        navbar.style.display = 'block';
        location.reload();
        desaparecerYReaparecer();
    }
}





//  logica Dark and light mode 

const body = document.body;
const toggleButton = document.getElementById("toggleButton");
let isDarkMode = false;

toggleButton.addEventListener("click", function () {
    isDarkMode = !isDarkMode;

    if (isDarkMode) {
        body.classList.add("dark-mode");
        
    } else {
        body.classList.remove("dark-mode");
        
    }
});


// Fin logica Dark and light mode 


/* ----------------------------------Start video --------------------------------- */

function videoUrl(hmmmmmm){
    document.getElementById("slider").src = hmmmmmm;
  }
/* ----------------------------------End video --------------------------------- */

//  Logica FORM

const btn = document.getElementById('button');
const messageBox = document.getElementById('messageBox');
document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';

        const serviceID = 'service_vt6rvmg';
        const templateID = 'template_djsoldn';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.value = 'Send Email';
                showMessage('Email sent!', false);
                this.reset();
            }, (err) => {
                btn.value = 'Send Email';
                showMessage(JSON.stringify(err), true);
            });
    });

function showMessage(message, isError) {
    messageBox.textContent = message;
    messageBox.classList.remove(isError ? 'success' : 'error');
    messageBox.classList.add(isError ? 'error' : 'success');
    messageBox.style.display = 'block';

    setTimeout(function () {
        messageBox.style.display = 'none';
    }, 4000);
};
//FIN   EMAIL form



