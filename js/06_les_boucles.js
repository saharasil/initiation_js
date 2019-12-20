// alert('js okay');
// ********** les boucles *****//

// il ya différents types de boucles, les plus uilisées sont la boucles "FOR" et la boucle " WHILE"
//*-* Boucle FOR()
for(let i =0; i <=5; i++){
    document.write('<p>Nombre de tour(s) de boucle(s): <em style="background:yellow;"> ' + i + '</em></p>');

}
document.write("<hr>");

/* pour i=0 => j'initalise le départ de la boucles à 0 ,
pour i <= 5 ; tant que la valeur de i est inférieur ou égale à 5
pour i++ ; j'incrémente (j'ajoute) un tour de boucle
En gros je donne l'instruction de faire un tour de boucle suplémentaire tant que la valeur de i n'est pas égale ou supérieur à 5 */

// La boucle WHILE
var j=0;
while(j<=5){
    document.write('<p>Nombre de tour(s) de boucle(s): <em style="background:yellow;"> ' + j + '</em></p>');
    //ATTENTION A NE PAS OUBLIER L'INCREMENTATION
    j++;
}
document.write("<hr>");

/* -----------------------------
    EXERCICE
------------------------------ */
// -- Supposons le tableau suivant :
/**
 * CONSIGNE : Grâce à une boucle FOR, 
 * affichez la liste des prénoms
 * du tableau ci-dessus dans la console, 
 * ou sur votre page.
 */
var Prenoms = ['Jean', 'Marc', 'Matthieu', 'Luc', 'Pierre', 'Paul', 'Jacques', 'Hugo'];
console.log(Prenoms);
for(let i=0; i<Prenoms.length; i++){
    console.log(Prenoms[i]);
    document.write(Prenoms[i]);
    document.write("/");
 }
 