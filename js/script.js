// apparition des descriptions des images en hover
const images = document.querySelectorAll('.onit'); // selectionner toutes les images à effet hover

// Parcourir toutes les images
images.forEach((image) => {// pour chaque image ayant pour class: onit
    //La balise figcaption propre à cette image
        const figcaption = image.nextElementSibling;

        image.addEventListener('mouseover', function() {// curseur sur l'image en question
            figcaption.style.display = 'block';// afficher la figcaption apropriée
        });

        image.addEventListener('mouseout', function () {
            figcaption.style.display = 'none';
        });
});



document.getElementById("formulaire").addEventListener("submit", function(e) {
    e.preventDefault(); // Empêche l'envoie par défaut du formulaire

    var mail = document.getElementById("email").value;
    var check = document.getElementById("check").value;
    

    if (mail !== "" && check !== ""){//tous les champs sont remplis
        document.getElementById("popup").style.display = "block";
        var popup = document.getElementById("popup");
setTimeout(function(){
    popup.style.display = "none";
}, 1000);
    } else { //Message d'erreur
        var mess = document.getElementById("69");
        document.getElementById("popup").style.display = "block";
        document.getElementById("69").style.color = "red";
        mess.textContent = 'Veuillez remplir tous les champs';
        var popup = document.getElementById("popup");
setTimeout(function(){
    popup.style.display = "none";
}, 1000);
    }
   
})
   

// bouton à checker dans le formulaire
const checked = document.getElementById ('checkact');
const checked1 = document.getElementById ('checkact1');
const checked2 = document.getElementById ('checkact2');
// si button "Des films " est cliqué, la couleur des bordures change en rouge
checked.addEventListener("click", function coche() {
    checked.style.border = "solid 1px red";
})
// si button "Des comics " est cliqué, la couleur des bordures change en rouge
checked1.addEventListener("click", function coche() {
    checked1.style.border = "solid 1px red";
})
// si button "De tous " est cliqué, la couleur des bordures change en rouge
checked2.addEventListener("click", function coche() {
    checked2.style.border = "solid 1px red";
    
})

// Animation fade in 
const elementsToAnimate = document.querySelectorAll('.fade-left');

function checkElementsInView() {
   elementsToAnimate.forEach((element) => {
       const elementTop = element.getBoundingClientRect().top;
       const windowHeight = window.innerHeight;

       if (elementTop < windowHeight) {
           element.classList.add('visible');
       } else {
           element.classList.remove('visible');
       }
   });
}

window.addEventListener('scroll', checkElementsInView);
window.addEventListener('resize', checkElementsInView);

window.addEventListener('load', checkElementsInView);

const imageSuivante = document.getElementById('image-suivante');

document.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY + window.scrollY; // Ajoutez le défilement vertical à la position Y

    imageSuivante.style.left = mouseX + 'px';
    imageSuivante.style.top = mouseY + 'px';
});
