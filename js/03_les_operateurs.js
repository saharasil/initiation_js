//je vérifie ma connection au fichier html
// alert('js okay'); 
/*********
   Les opétarteurs arithmétique
   ************/
// l'addition 

  //1 déclaration et affectation de plusieurs variables :
  var nb1, nb2, resultat ;
  nb1=10;
  nb2=5;

  //L'addition de nb1& nb2 avec l'opérateur "+"

  resultat = nb1 + nb2;
  console.log(resultat);

  //La soustraction de nb1 & nb2  avec l'opérateur "-"
   resultat = nb1 - nb2;
   console.log(resultat);

//    La division de nb1 & nb2 avec l'orérateur "/" 
    resultat = nb1 / nb2;
    console.log(resultat);

    // la multiplication de nb1 & nb2 avec l'opérateur "*"
    resultat = nb1 * nb2;
    console.log(resultat);

    /* 
    Le modulo correspond au reste de la division.
    Le modulo de nb1 & nb2 avec l'opérateur "%"
    */
   resultat = nb1 % nb2;
   console.log(resultat);


   /**************
    Les écriture simplifiées
    */

    // Addition
    // je créer ma variable nb1 et je lui affecte une valeur 15 (avec le symbole =) 
    nb1 = 15;
    
    // première variante : 
   //  pour avouter 5 à ma valeur de 15, je réaffecte à ma valeur de base (donc15) auquel je lui rajoute 5 :

   //  /* ma variable                                 la valeur de reference                 */
   //       nb1 =                                               nb1                 +            5; 
   //       // ici on dit que le resulltat final de nb1 est la somme de notre variable +5 
   //       console.log(nb1); retourne 20 donc 15+5  

   // deuxième variante 
   nb1+= 5; // ce qui est équivalent à écrire nb1= nb1+5
   console.log(nb1);

   /*
   je peux procéder de la même manière pour tous  les autres opérateurs arithmétiques : " + ", " - "," * " " / " et " % "
   */




