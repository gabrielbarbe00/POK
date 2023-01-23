
             var btn = document.querySelector('button1');
             var btn2 = document.querySelector('button2');
             var J1,J2, Vainqueur;
             var coupIA;
             var panneau, html, panel, btn3;
             var resetButton;
             var pierre, feuille, ciseaux;
             var bool=false;
             btn.addEventListener('click', choixCoups2);
             btn2.addEventListener('click', choixCoups);
             function PFC (J1,J2){
             if (J1==='Pierre' && J2==='Ciseaux') {
             Vainqueur = 'J1';
             } else if (J1==='Pierre' && J2==='Feuille') {
             Vainqueur = 'J2';
             } else if (J1==='Ciseaux' && J2==='Pierre') {
             Vainqueur = 'J2';
             } else if (J1==='Ciseaux' && J2==='Feuille') {
             Vainqueur = 'J1';
             } else if (J1==='Feuille' && J2==='Ciseaux') {
             Vainqueur = 'J2';
             } else if (J1==='Feuille' && J2==='Pierre') {
             Vainqueur = 'J1';
             } else if (J1===null || J2===null){
             Vainqueur=null;
             }
             else Vainqueur='Null';
             html = document.querySelector('html');
             panel = document.createElement('div');
             panel.setAttribute('class', 'msgBox');
             html.appendChild(panel);
             if (Vainqueur==='Null') {
             var msg = document.createElement('p');
             msg.textContent = 'J1 a joué ' + J1 + '. J2 a joué ' + J2 + '. Match nul. Réessayez'
             panel.appendChild(msg);
             setGameOver();
             } else if (Vainqueur===null) {
             var msg = document.createElement('p');
             msg.textContent = "Un des joueurs n'a pas joué.";
             panel.appendChild(msg);
             setGameOver();
             }
             else {
             var msg = document.createElement('p');
             msg.textContent = 'J1 a joué '+ J1 + '. J2 a joué ' + J2 + '. Le vainqueur est : ' + Vainqueur;
             panel.appendChild(msg);
             setGameOver();
             }
             }
             function choixCoups (){
             bool=false;
             document.querySelector('.ensemble').style.display = 'none';
             while (bool===false) {
             J1=prompt('J1 choisit son coup : Pierre, Feuille ou Ciseaux');
             if (J1 === 'Pierre' || J1 === 'Feuille' || J1 === 'Ciseaux') {
             bool=true;
             } else if (J1===null){
             bool=true;
             }
             else {
             bool=false;
             alert('Entrez un coup valide ');}
             }
             bool=false;
             while (bool===false) {
             J2=prompt('J2 choisit son coup : Pierre, Feuille ou Ciseaux');
             if (J1===null || J2===null){
             bool=true;
             }
             else if (J2 === 'Pierre' || J2 === 'Feuille' || J2 === 'Ciseaux') {
             bool=true;
             } else {
             bool=false;
             alert('Entrez un coup valide ');
             }
             }
             PFC(J1,J2);
             Vainqueur='A';
             }
             function choixCoups2 () {
             html = document.querySelector('html');
             panneau = document.createElement('div');
             panneau.setAttribute('class', 'liste');
             html.appendChild(panneau);
             var choix = document.createElement('ul');
             panneau.appendChild(choix);
             var l1 = document.createElement('li');
             choix.appendChild(l1);
             var l2 = document.createElement('li');
             choix.appendChild(l2);
             var l3 = document.createElement('li');
             choix.appendChild(l3);
             pierre = document.createElement('img');
             pierre.src ='../Images/Pierre.png';
             l1.appendChild(pierre);
             pierre.addEventListener('click', Pierre);
             pierre.addEventListener('click', function(){
             mongoose.model("Coup", CoupSchema).findOneAndUpdate({name:'Pierre'}, {date:Date.now}, function(err, utilisateur)
               {
                 if (err) return handleError(err);
               })
             });
             ciseaux = document.createElement('img');
             ciseaux.src='../Images/Ciseaux.png'
             l2.appendChild(ciseaux);
             ciseaux.addEventListener('click', Ciseaux);
             feuille = document.createElement('img');
             feuille.src='../Images/Feuille.png';
             l3.appendChild(feuille);
             feuille.addEventListener('click', Feuille);
             document.querySelector('.ensemble').style.display = 'none';
             coupOrdi();
             }
             function coupOrdi(){
             a = 1 + Math.floor(Math.random()*((4-1)));
             if (a===1){
             J2='Pierre';
             }
             else if (a===2) {
             J2='Feuille';
             }
             else {
             J2='Ciseaux';
             }
             }
             function Pierre(){
             J1 = 'Pierre';
             html.removeChild(panneau);
             PFC(J1,J2);
             }
             function Feuille(){
             J1 = 'Feuille';
             html.removeChild(panneau);
             PFC(J1,J2);
             }
             function Ciseaux(){
             J1 = 'Ciseaux';
             html.removeChild(panneau);
             PFC(J1,J2);
             }
             function setGameOver() {
             html = document.querySelector('html');
             ensemble = document.createElement('div');
             ensemble.setAttribute('class', 'resetbutton');
             html.appendChild(ensemble);
             resetButton = document.createElement('button');
             resetButton.textContent = 'Start new game';
             resetButton.setAttribute('class', 'button1');
             ensemble.appendChild(resetButton);
             resetButton.addEventListener('click', resetGame);
             }
             function resetGame(){
             html.removeChild(panel);
             resetButton.parentNode.removeChild(resetButton);
             document.querySelector('.ensemble').style.display = 'block';
             }
             /* to do :
             Implémenter fonction J2 sur bouton 2
             Essayer de mettre sous forme de boucle ma fonction choixCoups2
             Changer fonction choixCoups
             Essayer de changer mes boutons en image cliquable*/