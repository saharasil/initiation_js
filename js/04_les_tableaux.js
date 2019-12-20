// alert('js okay');
// --Declarer un tableau indexé:
// 1-
var monTableau =[];
console.log(monTableau);
// pour faire les accolade c'est altgr+5.
// 2-
var myArray = new Array;
console.log(myArray);
// myArray et mon tableau sont des tableaux qui peuvent contenir plusieurs informations.
// Affecter des valeurs au tableau,plusieurs méthode:
// a-
var nosPrenoms = ["Christian","Philippe","Mamadou"];
console.log(nosPrenoms);
// b-
monTableau[0] = "Christian";
monTableau[1] = "Mamadou";
monTableau[2] = "Philippe";
console.log(monTableau);

// --Déclarer et affecter des valeurs a un objet.
var Coordonnee = {
    prenom: "Hugo",
    nom: "LIEGEARD",
    age: 82
};

console.clear(); 
// permet d'éffacer les lignes de débug qui précèdele console .clear();

console.log(Coordonnee);
// j'affiche toute les informations de mon tableau.

console.log(Coordonnee['prenom']);

// j'affiche que le prenom.
console.log(Coordonnee.nom);

// on va créer 2 tableaux indexé
var listeDePrenom =["Oussmane","Cherif","Hugo"];
var listeDeNom = ["Mama","Benalal", "LIEGEARD"];
var Annuaire = [listeDePrenom, listeDeNom];
console.log(Annuaire);
document.write(); //fonction native de JS qui permet d'inscrire un résultat directement sur la page html et non plus sur console
document.write(Annuaire[0][2] + " " + Annuaire[1][2]);
document.write("<hr>");
document.write(Annuaire[0][0]);
document.write(" ");
document.write(Annuaire[1][1]);


//tableau à 2 dimensions non indexé

var contact = [
    {prenom: "Hugo", nom:"LIGEARD", tel:"07 82 25 26 23"},
    {prenom: "Salim", nom:"SOUMAR", tel:"07 23 62 52 55"},
    {prenom: "Pransun", nom:"BALASUBRA", tel:"07 95 66 45 77"},

];
console.log(contact);


/*************Exercice****************/
/***créez un tableau à 2 dimensions appelé  :
"AnnuaireDesStagiaires" qui contiendra toute 
les coordonnées pour chaque stagiaire : 
EX. Nom, Prénom, Tel******/

var AnnuaireDesStagiaires =[
    {prenom: "Samia", nom:"ouali", tel:"06 25 24 66 22"},
    {prenom: "norya", nom:"faffi", tel:"07 551 56 55 44"},
    {prenom: "maria", nom:"solitude", tel:"07 25 36 44"},
    {prenom: "cinnie", nom:"giran", tel:"06 45 36 22 33"},


]; 

// la première dimension c'est ce que contient le tableau (nomres de stagiaires) la deuxiéme dimensioon les coordonnées de chaque stagiaires


//tableau à 3 dimensions

var array3Dimension =[
    {
        prenom:"Hugo",
        nom : "LIEGEARD",
        coordonnees:{
            email : "hugo.liegeard@lepoles.com",
            tel:{
                fixe: "0596 108 328",
                fax: "0596 108 632",
                port:{
                    prive:"07 83 97 10 15",
                    pro : "07 83 97 15 15"
                } 
            },
            adresse:{
                ville:"DUCOS",
                cp:"97224",
                region:"Martinique",
                pays:{
                    code:"FR",
                    nom:"FRANCE"
                }
            }
        }
    }
];
console.log(array3Dimension);
console.log(array3Dimension[0].coordonnees.email);


/**********************Ajouter un élément***********************/

var couleur = ['rouge','jaune','vert'];
console.clear();
console.log(couleur);
console.log(couleur.length); // length pour afficher sur ma console le nombre d'élément que contient mon tableau

//pour ajouter un élément dans mon tableau, je fais appel à la fonction push()
var nbElementDeMonTableau= couleur.push('violet');
console.log(couleur);
console.log(nbElementDeMonTableau);


// pour ajouter un élément au début du tableau, je fais appel à la fonction unshift()

var nbElementDeMonTableau= couleur.unshift('bisque','orange');
console.log(couleur);
console.log(nbElementDeMonTableau);

//pour effacer ou supprimer le dérnier élément de mon tableau, je fais appel à la fonction pop()

couleur.pop();
console.log(couleur);
console.log(nbElementDeMonTableau);

// /: pour supprimer le premier élément de mon tableau, j'utilise la fonction shift()
couleur.shift();
console.log(couleur);
console.log(nbElementDeMonTableau);












