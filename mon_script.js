console.log("bonjour");// console.log permet l'affichage

// EXEMPLES DE COMMANDES JAVASCRIPT
    // Exemple avec conditions
var a = 56, b = 25; //déclaration des variables
if ( a < b ) {
    console.log( a );
}else {console.log( b );
}
    //Exemple de fonction

//On déclare toutes les variables
var lundi = "Des patates", mardi = "Des pâtes", mercredi = "Risotto aux cèpes", jeudi = "Des frites", vendredi = "Des sushis";
function afficherRepas(jour){
    console.log("Le repas d'aujourd'hui est "+ jour); //la  commande  «console.log»  permet d’afficher ce qui est entre les parenthèses dans la console du navigateur

}
//On veut que la fonction affiche dans la console une phrase, suivie du contenu du paramètre 'jour' passé en fonction }
afficherRepas(mercredi);//On exécute la fonction avec une des variables placée en paramètre.
afficherRepas(mardi);

    //exemple condition

var nombre1 = 156;
var nombre2 = 350;
if ( nombre1 > nombre2 ) { //On teste si «nombre1» est plusgrand que «nombre2»console.log(nombre1); //Si c’est le cas, on affiche dans la console la valeur de «nombre1»}
    console.log(nombre1);
}else {console.log(nombre2); //Sinon on affiche dans la console la valeur de «nombre2»}
}

    //Opérateur ternaire

var estMembre = false;//On définit la variable estMembre avec la valeur booléenne "False"
var texte= "Le prix est : "//On définit une phrase quiapparaîtraen console
var resultat=(estMembre  ?  "15  €"  :  "30  €")//On  teste  si  estMembre  est  vrai  ou  faux,  puis  on  stockela réponse dans la variable "résultat". "estMembre" étant faux, la valeur stockée sera "30 €".
console.log(texte+resultat); //On affiche le résultat

    //Switch case

var estCoupable = "innocent";
switch(estCoupable){
    case "coupable":
        console.log("Vous  allez  sur  la  case  prison,  ne  passez  pas  par  la case  départ,  ne  touchez  pas 20000 €");
        break;
        case"innocent":
        console.log("Tirez une carte chance!");
        break;
        default:
        console.log("Vous échappez à la justice.");
        break;
}
    //Boucles for - do while - while
        //for
var table = 7; //On cherchera à afficher la table de 7
for ( var i = 0; i < 11; i++ ) {//On définit un compteur, une limite afin de pouvoir stopper la boucle et enfin une incrémentation
    console.log(i+' fois '+table+' est égale à '+ i*table);//On affiche dans la console lesvariable, le calcul et du texte
            //Le symbole «+» sert ici à la concaténation
}

        //do while

var compteur = 10; // On définit un compteur
do { //On indique laliste d’instructions
    console.log('Il  reste  '+compteur+'  étapes  avant  la  fin  du  compte  à  rebours') //Ici,  on  lui  demande d’afficher la variable «compteur» accompagnée de texte
        compteur --; // On décrémente «compteur»
        } while(compteur > 0); // La boucle continuera jusqu’à ce que «compteur» arrive à 0
        
        //while

var nbRepas = 0, repas = "biscuit"; //On définit les variables
    while(nbRepas < 13) { //Tant que «nbRepas» est plus petit que 13
        if (nbRepas > 1) { //Le but ici est de définit si «biscuit» prend un «s» ou pas, en fonction du nombre présent
            repas = "biscuits";}console.log('Vous avez mangé '+nbRepas+' '+repas);//On affiche le résultat
            nbRepas++; //On incrémente lavariable
        }

        //Les avénements