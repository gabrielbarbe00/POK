let bouton_add2 = document.getElementById("bouton_add2");
let bouton_add3 = document.getElementById("bouton_add3");
let bouton_supp3 = document.getElementById("bouton_supp3");
let bouton_supp4 = document.getElementById("bouton_supp4");
let div_choix2 = document.getElementById("div_choix2");
let div_choix3 = document.getElementById("div_choix3");
let div_choix4 = document.getElementById("div_choix4");
let nbr_choice = 2;

localStorage.clear()

bouton_add2.addEventListener("click", () => {
    div_choix3.style.display = "flex";
    bouton_add2.style.display = "none";
    nbr_choice = 3;
})

bouton_add3.addEventListener("click", () => {
  div_choix4.style.display = "flex";
  bouton_add3.style.display = "none";
  bouton_supp3.style.display = "none";
  nbr_choice = 4;
})

bouton_supp3.addEventListener("click", () => {
  div_choix3.style.display = "none";
  bouton_add2.style.display = "block";
  nbr_choice = 2;
})

bouton_supp4.addEventListener("click", () => {
  div_choix4.style.display = "none";
  bouton_add3.style.display = "block";
  bouton_supp3.style.display = "block";
  nbr_choice = 3;
})

document.getElementById("bouton_suivant").addEventListener("click", () => {
  let text_choix1 = document.getElementById('text_choix1').value
  localStorage.setItem('text_choix1',text_choix1)
  let text_choix2 = document.getElementById('text_choix2').value
  localStorage.setItem('text_choix2',text_choix2)
  let text_choix3 = document.getElementById('text_choix3').value
  localStorage.setItem('text_choix3',text_choix3)
  let text_choix4 = document.getElementById('text_choix4').value
  localStorage.setItem('text_choix4',text_choix4)
  if (nbr_choice == 2){
    if (text_choix1 != "" && text_choix2 != "") {
      location.href = "./roulette2.html"
    } else {
      alert("Remplissez les 2 choix")
    }

  } else if (nbr_choice == 3){
    
    if (text_choix1 != "" && text_choix2 != "" && text_choix3 != "") {
      location.href = "./roulette3.html"
    } else {
      alert("Remplissez les 3 choix")
    }

  } else if (nbr_choice == 4){
    if (text_choix1 != "" && text_choix2 != "" && text_choix3 != "" && text_choix4 != "") {
      location.href = "./roulette4.html"
    } else {
      alert("Remplissez les 4 choix")
    }
  }
    
})
