/******************
   LES VARIABLES

 *****************/

//  1.je fais une alerte pour vérifier que mon fichier JS est bien relié à mon html 
// alert("js okay"); 
/*
 lorsque l'on a besoin  de stocker une information on utilise une variable. Une variable peut être interpréter comme une boite dans laquelle nous allons stocker une information. 
IL EXISTE PLUSIEURS TYPE DE VARIABLE 
*/
// pour déclarer une variable  (la créer) : 
 var prenom;

//  pour lui affercter une valeur : 

var prenom = 'Sahar';
// Afficher la valeur d'une variable : 
// a- pour tester une valeur on ouvre la console du navigateur  (F12) puis on écrit le nom de la variable à droite des ">>" puis ENTRER
// b- Afficher une alert avec la variable (NE PAS METTRE DE GUILLEMETS) 
// alert(prenom); 

// c- On écrit dans le script (code) :
console.log(prenom); 

// il est possible d'écrire des plusieus variables sur une seule ligne : 
var nb1, nb2, nb3;
// & d'y affecter des valeurs : 
// pour les chiffres on met pas des guillemet 
nb1 = 1;
nb2 = 50;
nb3 = 220;

// un instruction se termine TOUJOURS par un point virgule. 
// Le nom d'une variable peut comporter des letttres et des chiffres mais exclut les signes de ponctuation (espace, accent......).


// /!\ LE JS EST SENSIBLE A LA CASSE 
/*
ma variable =/= de maVariable ou ma_variable
*/ 

//  écriture snake case => ma_variable 
//  écriture camelCase => maVariable 

/******* LES TYPES DES VARIABLES*********/
// -- typeof, me permet de connaitre le type de ma variable:

console.log(typeof prenom);

// Déclaration et affectation d'un nombre 

var Age = 40;
console.log(typeof Age);

//-- Les variable de type FLOAT
var uneDecimale = -2.984;
console.log(typeof uneDecimale); //la console retourne "number" donc un / ou des chiffres 

//-- les variable de type BOOLéens (boolean)
// Le BOOLEEN permet de vérifier si l'information est VRAI ou FAUX / sa fonction
var unBoolean = false; //true
console.log(unBoolean); //retourne false
console.log(typeof unBoolean); //retourne boolean

//-- LES CONSTANTES
//-- La déclaration CONST permet de créer une constante accessible UNIQUEMENT en lecture. sa valeur ne pourra pas être modifiée par des réaffectations ultérieurs. Une constante ne paut pas être déclarée à nouveau.

// Dans la concention on écrit les constantes en majuscule pour les reconnaitre  

const HOST ="localhost";
const USER ="root";
const PASSWORD ="mysql";
/*
Donc il est mpossible de faitre cela:
const USER ="sahar"
la console me retournera=> SyntaxError: redeclaration of const USER 
*/

var unNombre ='24';
console.log(unNombre); //affiche 24
console.log(typeof unNombre);  // retourne string (chaine de caractère)

//pour convertire le string(chaine de carctére) '24' en number :
unNombre = parseFloat(unNombre); //parsefloat permet d'intérpréter le string 24 en chiffre 24
console.log(unNombre); // affiche 24
console.log(typeof unNombre); // retourne number

// pour convertire un chiffre en string
var nb4= 93; 
console.log(nb4); // affiche 93
console.log(typeof nb4); //affiche number

//tostring() ppermet de convertire un nombre entier ou décimale en chaine de caractère (string).
nb4 = nb4.toString(); 
console.log(typeof nb4);





