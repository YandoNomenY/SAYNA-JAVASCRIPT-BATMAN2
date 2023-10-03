/*commencer avec le quizz numero 1 en appuyant sur le bouton demarrer le quiz
const startGame = document.getElementById("start");
const quizContainer = document.getElementById("q1");
const divAChanger = document.getElementById("quiz");


startGame.addEventListener("click", function() {
    //remplacer le div
        
        divAChanger.style.display = "none";

        quizContainer.style.display = "block";
})
*/
// Récupérez les boutons Commencer les quiz et Questions suivantes
const quiz = document.getElementById("quiz");
const startButton = document.getElementById("start");
const nextButton1 = document.getElementById("next1");
const nextButton2 = document.getElementById("next2");
const nextButton3 = document.getElementById("next3");
const nextButton4 = document.getElementById("next4");
const nextButton5 = document.getElementById("next5");
const nextButton6 = document.getElementById("next6");
const nextButton7 = document.getElementById("next7");
const nextButton8 = document.getElementById("next8");
const nextButton9 = document.getElementById("next9");
const nextButton10 = document.getElementById("next10");
const nextButton11 = document.getElementById("next11");
const nextButton12 = document.getElementById("next12");
const nextButton13 = document.getElementById("next13");
const nextButton14 = document.getElementById("next14");
const nextButton15 = document.getElementById("next15");
const resultatButton = document.getElementById("next16");



// Récupérez les quiz pour les afficher
const q1 = document.getElementById("q1");
const q2 = document.getElementById("q2");
const q3 = document.getElementById("q3");
const q4 = document.getElementById("q4");
const q5 = document.getElementById("q5");
const q6 = document.getElementById("q6");
const q7 = document.getElementById("q7");
const q8 = document.getElementById("q8");
const q9 = document.getElementById("q9");
const q10 = document.getElementById("q10");
const q11 = document.getElementById("q11");
const q12 = document.getElementById("q12");
const q13 = document.getElementById("q13");
const q14 = document.getElementById("q14");
const q15 = document.getElementById("q15");
// POur récupérer le nombre de quiz correct
let note = 0;


// Gestionnaire d'événement pour le clic sur le bouton "Commencer le quiz"
startButton.addEventListener('click', function() {
    // Masquez le contenu initial
    quiz.style.display = "none";

    // Affichez la première question (q1)
    q1.style.display = "block";
});

// filtrage des choix du joueur
// Récupérez toutes les cases à cocher
const checkboxes = document.querySelectorAll('.checkbox');

// Gestionnaire d'événement pour le clic sur une case à cocher
checkboxes.forEach(function(checkbox) {
    checkbox.addEventListener('click', function() {
        // Récupérez la valeur de la case à cocher cochée
        const checkedValue = checkbox.value;

        // Récupérez le label de la case à cocher cochée
        const checkedLabel = checkbox.parentNode;

        // Récupérez la bonne réponse et son label
        const bonneReponse = "Le Sphinx"; 
        const labelBonneReponse = document.querySelector('label input[value="Choix 1"]').parentNode;

        // Vérifiez la réponse de l'utilisateur
        if (checkedValue === bonneReponse) {
            // Réponse correcte : changez la couleur de fond de la case à cocher en jaune
            checkedLabel.style.backgroundColor = 'green';
            note++;
        } else {
            // Réponse incorrecte : changez la couleur de fond de la case à cocher en rouge
            checkedLabel.style.backgroundColor = 'red';
            // Changez également la couleur de fond de la bonne réponse en vert
            labelBonneReponse.style.backgroundColor = 'green';
        }
        reponseCorrect = checkedValue;
            reponse = bonneReponse;
    });
});

// Gestionnaire d'événement pour le clic sur les boutons "QUESTION SUIVANTE"
nextButton1.addEventListener('click', function() {
    // Masquez la question actuelle (q1)
    q1.style.display = "none";

    // Affichez la question suivante (q2)
    q2.style.display = "block";
});




// 
nextButton2.addEventListener('click', function() {
    // Masquez la question actuelle (q1)
    const quiz1 = document.getElementById("q1");
    quiz1.style.display = "none";

    // Affichez la question suivante (q2) >>> Harley Quinn
    const quiz2 = document.getElementById("q2");
    quiz2.style.display = "block";
});

// filtrage des choix du joueur
// Récupérez toutes les cases à cocher
const checkboxe2 = document.querySelectorAll('.checkbox2');

// Gestionnaire d'événement pour le clic sur une case à cocher
checkboxe2.forEach(function(checkbox2) {
    checkbox2.addEventListener('click', function() {
        // Récupérez la valeur de la case à cocher cochée
        const checkedValue = checkbox2.value;

        // Récupérez le label de la case à cocher cochée
        const checkedLabel = checkbox2.parentNode;

        // Récupérez la bonne réponse et son label
        const bonneReponse = "Psychiatre"; 
        const labelBonneReponse = document.querySelector('label input[value="Psychiatre"]').parentNode;

        // Vérifiez la réponse de l'utilisateur
        if (checkedValue === bonneReponse) {
            // Réponse correcte : changez la couleur de fond de la case à cocher en jaune
            checkedLabel.style.backgroundColor = 'green';
            note++;
        } else {
            // Réponse incorrecte : changez la couleur de fond de la case à cocher en rouge
            checkedLabel.style.backgroundColor = 'red';
            // Changez également la couleur de fond de la bonne réponse en vert
            labelBonneReponse.style.backgroundColor = 'green';
        }
        reponseCorrect = checkedValue;
            reponse = bonneReponse;
    });
});

/*Allez au quiz 3 Double Face*/ 
nextButton2.addEventListener('click', function() {
    q2.style.display = "none";
    q3.style.display = "block";
});

const checkboxe3 = document.querySelectorAll(".checkbox3");

checkboxe3.forEach(function(checkbox3) {
    checkbox3.addEventListener('click', function() {
        
        const checkedValue = checkbox3.value;

        const checkedLabel = checkbox3.parentNode;

        const bonneReponse = "Une pièce"; 
        const labelBonneReponse = document.querySelector('label input[value="Une pièce"]').parentNode;

        if (checkedValue === bonneReponse) {
            checkedLabel.style.backgroundColor = 'green';
            note++;
        } else {
            checkedLabel.style.backgroundColor = 'red';
            labelBonneReponse.style.backgroundColor = 'green';
        }
        reponseCorrect = checkedValue;
            reponse = bonneReponse;
    });
});


//Pour passer au quiz numero 4
nextButton3.addEventListener('click', function() {
    q3.style.display = "none";
    
    q4.style.display = "block";
});

const checkbox4 = document.querySelectorAll(".checkbox4");
checkbox4.forEach(function(checkbox4) {
    checkbox4.addEventListener('click', function() {
        const checkedValue = checkbox4.value;

        const checkedLabel = checkbox4.parentNode;

        const bonneReponse = "Stanley Kubrick"; 
        const labelBonneReponse = document.querySelector('label input[value="Stanley"]').parentNode;

        if (checkedValue === bonneReponse) {
            checkedLabel.style.backgroundColor = 'green';
            note++;
        } else {
            checkedLabel.style.backgroundColor = 'red';
            labelBonneReponse.style.backgroundColor = 'green';
        }
    });
});

// Passer au quiz numero 5 la ville Batman en Turquie
nextButton4.addEventListener('click', function() {
    q4.style.display = "none";
    
    q5.style.display = "block";
});

const checkbox5 = document.querySelectorAll(".checkbox5");
checkbox5.forEach(function(checkbox5) {
    checkbox5.addEventListener('click', function() {
        const checkedValue = checkbox5.value;

        const checkedLabel = checkbox5.parentNode;

        const bonneReponse = "Turquie"; 
        const labelBonneReponse = document.querySelector('label input[value="Turquie"]').parentNode;

        if (checkedValue === bonneReponse) {
            checkedLabel.style.backgroundColor = 'green';
            note++;
        } else {
            checkedLabel.style.backgroundColor = 'red';
            labelBonneReponse.style.backgroundColor = 'green';
        }
    });
});

// Passer au quiz numero 6 Le premier vilain dans 232
nextButton5.addEventListener('click', function() {
    q5.style.display = "none";
    
    q6.style.display = "block";
});

const checkbox6 = document.querySelectorAll(".checkbox6");
checkbox6.forEach(function(checkbox6) {
    checkbox6.addEventListener('click', function() {
        const checkedValue = checkbox6.value;

        const checkedLabel = checkbox6.parentNode;

        const bonneReponse = "Ra's al Ghul"; 
        const labelBonneReponse = document.querySelector('label input[value="Ghul"]').parentNode;

        if (checkedValue === bonneReponse) {
            checkedLabel.style.backgroundColor = 'green';
            note++;
        } else {
            checkedLabel.style.backgroundColor = 'red';
            labelBonneReponse.style.backgroundColor = 'green';
        }
    });
});

// Passer au quiz numero 7 Gotham City
nextButton6.addEventListener('click', function() {
    q6.style.display = "none";
    
    q7.style.display = "block";
});



const checkbox7 = document.querySelectorAll(".checkbox7");
checkbox7.forEach(function(checkbox7) {
    checkbox7.addEventListener('click', function() {
        const checkedValue = checkbox7.value;

        const checkedLabel = checkbox7.parentNode;

        const bonneReponse = "Gotham City"; 
        const labelBonneReponse = document.querySelector('label input[value="Gotham"]').parentNode;

        if (checkedValue === bonneReponse) {
            checkedLabel.style.backgroundColor = 'green';
            note++; 
        } else {
            checkedLabel.style.backgroundColor = 'red';
            labelBonneReponse.style.backgroundColor = 'green';
        }
    });
});

// Passer au quiz 8 en appuyant sur le boutton Question suivante
nextButton7.addEventListener("click", function() {
    q7.style.display = "none";
    q8.style.display = "block";
})
const checkbox8 = document.querySelectorAll (".checkbox8");

checkbox8.forEach(function(checkbox8) {
    checkbox8.addEventListener('click', function() {
        const checkedValue = checkbox8.value;

        const checkedLabel = checkbox8.parentNode;

        const bonneReponse = "Mickael Kaeton"; 
        const labelBonneReponse = document.querySelector('label input[value="Mickael"]').parentNode;

        if (checkedValue === bonneReponse) {
            checkedLabel.style.backgroundColor = 'green';
            note++;
        } else {
            checkedLabel.style.backgroundColor = 'red';
            labelBonneReponse.style.backgroundColor = 'green';
        }
    });
});

// Passer au quiz 9 en appuyant sur le boutton Question suivante
nextButton8.addEventListener("click", function() {
    q8.style.display = "none";
    q9.style.display = "block";
})
const checkbox9 = document.querySelectorAll (".checkbox9");

checkbox9.forEach(function(checkbox9) {
    checkbox9.addEventListener('click', function() {
        const checkedValue = checkbox9.value;

        const checkedLabel = checkbox9.parentNode;

        const bonneReponse = "Le Joker"; 
        const labelBonneReponse = document.querySelector('label input[value="Joker"]').parentNode;

        if (checkedValue === bonneReponse) {
            checkedLabel.style.backgroundColor = 'green';
            note++;
        } else {
            checkedLabel.style.backgroundColor = 'red';
            labelBonneReponse.style.backgroundColor = 'green';
        }
    });
});

// Passer au quiz numero 10
nextButton9.addEventListener("click", function() {
    q9.style.display = "none";
    q10.style.display = "block";
})

const checkbox10 = document.querySelectorAll (".checkbox10");

checkbox10.forEach(function(checkbox10) {
    checkbox10.addEventListener('click', function() {
        const checkedValue = checkbox10.value;

        const checkedLabel = checkbox10.parentNode;

        const bonneReponse = "L'Epouvantail"; 
        const labelBonneReponse = document.querySelector('label input[value="Epouvantail"]').parentNode;

        if (checkedValue === bonneReponse) {
            checkedLabel.style.backgroundColor = 'green';
            note++;
        } else {
            checkedLabel.style.backgroundColor = 'red';
            labelBonneReponse.style.backgroundColor = 'green';
        }
    });
});

// Passer au quiz numero 11
nextButton10.addEventListener("click", function() {
    q10.style.display = "none";
    q11.style.display = "block";
})

const checkbox11 = document.querySelectorAll (".checkbox11");

checkbox11.forEach(function(checkbox11) {
    checkbox11.addEventListener('click', function() {
        const checkedValue = checkbox11.value;

        const checkedLabel = checkbox11.parentNode;

        const bonneReponse = "Zoë Kravitz"; 
        const labelBonneReponse = document.querySelector('label input[value="Kravitz"]').parentNode;

        if (checkedValue === bonneReponse) {
            checkedLabel.style.backgroundColor = 'green';
            note++;
        } else {
            checkedLabel.style.backgroundColor = 'red';
            labelBonneReponse.style.backgroundColor = 'green';
        }
    });
});

// Passer au quiz numero 12
nextButton11.addEventListener("click", function() {
    q11.style.display = "none";
    q12.style.display = "block";
})

const checkbox12 = document.querySelectorAll (".checkbox12");

checkbox12.forEach(function(checkbox12) {
    checkbox12.addEventListener('click', function() {
        const checkedValue = checkbox12.value;

        const checkedLabel = checkbox12.parentNode;

        const bonneReponse = "Thomas et Martha"; 
        const labelBonneReponse = document.querySelector('label input[value="Thomas"]').parentNode;

        if (checkedValue === bonneReponse) {
            checkedLabel.style.backgroundColor = 'green';
            note++;
        } else {
            checkedLabel.style.backgroundColor = 'red';
            labelBonneReponse.style.backgroundColor = 'green';
        }
    });
});

// Passer au quiz numero 1
nextButton12.addEventListener("click", function() {
    q12.style.display = "none";
    q13.style.display = "block";
})

const checkbox13 = document.querySelectorAll (".checkbox13");

checkbox13.forEach(function(checkbox13) {
    checkbox13.addEventListener('click', function() {
        const checkedValue = checkbox13.value;

        const checkedLabel = checkbox13.parentNode;

        const bonneReponse = "Heath Legder"; 
        const labelBonneReponse = document.querySelector('label input[value="Heath"]').parentNode;

        if (checkedValue === bonneReponse) {
            checkedLabel.style.backgroundColor = 'green';
            note++;
        } else {
            checkedLabel.style.backgroundColor = 'red';
            labelBonneReponse.style.backgroundColor = 'green';
        }
    });
});

// Passer au quiz numero 2 Robin
nextButton13.addEventListener("click", function() {
    q13.style.display = "none";
    q14.style.display = "block";
})

const checkbox14 = document.querySelectorAll (".checkbox14");

checkbox14.forEach(function(checkbox14) {
    checkbox14.addEventListener('click', function() {
        const checkedValue = checkbox14.value;

        const checkedLabel = checkbox14.parentNode;

        const bonneReponse = "1940"; 
        const labelBonneReponse = document.querySelector('label input[value="1940"]').parentNode;

        if (checkedValue === bonneReponse) {
            checkedLabel.style.backgroundColor = 'green';
            note++;
        } else {
            checkedLabel.style.backgroundColor = 'red';
            labelBonneReponse.style.backgroundColor = 'green';
        }
    });
});

// Passer au dernier quiz
nextButton14.addEventListener("click", function() {
    q14.style.display = "none";
    q15.style.display = "block";
})

const checkbox15 = document.querySelectorAll (".checkbox15");

checkbox15.forEach(function(checkbox15) {
    checkbox15.addEventListener('click', function() {
        const checkedValue = checkbox15.value;

        const checkedLabel = checkbox15.parentNode;

        const bonneReponse = "Huntress"; 
        const labelBonneReponse = document.querySelector('label input[value="Huntress"]').parentNode;

        if (checkedValue === bonneReponse) {
            checkedLabel.style.backgroundColor = 'green';
            note++;
        } else {
            checkedLabel.style.backgroundColor = 'red';
            labelBonneReponse.style.backgroundColor = 'green';
        }
    });
});


// ID du popup resultat et de ses contenus
const resultat = document.getElementById ("resultat");
let moyenne = document.getElementById ("note");
let remarque = document.getElementById ("remarque");
// voir le resultat
resultatButton.addEventListener("click", function () {
    if ( note <=5) {
        moyenne.textContent = `${note}/15 C'EST PAS TOUT A FAIT CA...`;
        remarque.textContent = `Oula ! heureusement que Riddler est sous les verrous... 
        Il faut que vous vous repassiez les films, cette fois
         en enlèvant peut être le masque qui vous a bloqué la 
         vue ! Aller ! rien n'est perdu !`;
    } else if ( note >5 && note <= 10 ) {
        moyenne.textContent = `${note}/15 PAS MAL !`
        remarque.textContent = `Encore un peu d'entrainement avec le Chevalier Noir
         vous serrez bénéfique,mais vous pouvez marchez la tête haute
          vos connaissances sont là. A vous de les consolider,
           foncez Gotham est votre terrain de chasse !`;
    }else {
        moyenne.textContent = `${note}/15 BRAVO !`;
        remarque.textContent = `Vous êtes véritablement un super fan de l'univers de Batman !
         comics, films, rien ne vous échappe. Bruce Wayne a de qui être fier,
          Gotham est en paix et Batman peut reprendre sa retraite,
           vous veillez aux grains !`;
    }

//Affichage du popup resultat
    q15.style.display = "none";
    
    resultat.style.display = "block";

})
// Recommencer les quiz
const restart = document.getElementById ("restart");
restart.addEventListener("click", function () {
    resultat.style.display = "none";
    quiz.style.display = "block";
})

// les liens en scroll mode
const scrollDiv = document.getElementById('scroll');
const upImage = document.getElementById('up');
const downImage = document.getElementById('down');

let isDraggingUp = false;
let isDraggingDown = false;
let startY = 0;
let scrollTop = 0;

upImage.addEventListener('mousedown', (e) => {
    isDraggingUp = true;
    startY = e.clientY;
    scrollTop = scrollDiv.scrollTop;
});

downImage.addEventListener('mousedown', (e) => {
    isDraggingDown = true;
    startY = e.clientY;
    scrollTop = scrollDiv.scrollTop;
});

document.addEventListener('mousemove', (e) => {
    if (isDraggingUp) {
        const deltaY = e.clientY - startY;
        scrollDiv.scrollTop = scrollTop - deltaY;
        window.scrollBy(0, -deltaY);
    } else if (isDraggingDown) {
        const deltaY = e.clientY - startY;
        scrollDiv.scrollTop = scrollTop - deltaY;
        window.scrollBy(0, -deltaY);
    }
});

document.addEventListener('mouseup', () => {
    isDraggingUp = false;
    isDraggingDown = false;
});
