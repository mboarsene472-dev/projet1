// Étape 1 : récupérer l'écran (le h6 dans .ecran) et tous les boutons
const ecran = document.querySelector('.ecran h6');
const boutons = document.querySelectorAll('.buttons button');

let valeurActuelle = '0';
let resultatAffiche = false; // pour savoir si on vient d'afficher un résultat

// Étape 2 : écouter le clic sur chaque bouton
boutons.forEach(bouton => {
  bouton.addEventListener('click', () => {
    const valeur = bouton.textContent.trim();
    gererClic(valeur);
  });
});

// Étape 3 : logique selon le bouton cliqué
function gererClic(valeur) {
  if (valeur === 'ac') {
    valeurActuelle = '0';
    resultatAffiche = false;

  } else if (valeur === '=') {
    try {
      // remplace les symboles d'affichage par des symboles JS valides
      const expression = valeurActuelle.replace(/x/g, '*');
      valeurActuelle = eval(expression).toString();
    } catch (e) {
      valeurActuelle = 'Erreur';
    }
    resultatAffiche = true;
  } else if (valeur === 'exp') {
    // exemple : exponentiel -> on ajoute "**" pour puissance
    valeurActuelle += '**';
    resultatAffiche = false;

  } else {
    // chiffres et opérateurs (/, *, -, +, .)
    if (valeurActuelle === '0' || resultatAffiche) {
      valeurActuelle = valeur;
    } else {
      valeurActuelle += valeur;
    }
    resultatAffiche = false;
  }

  mettreAJourEcran();
}

// Étape 4 : mettre à jour l'affichage
function mettreAJourEcran() {
  ecran.textContent = valeurActuelle;
}