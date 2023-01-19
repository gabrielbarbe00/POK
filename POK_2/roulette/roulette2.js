document.getElementById("roulette_2_choix_1").textContent = localStorage.getItem('text_choix1')
document.getElementById("roulette_2_choix_2").textContent = localStorage.getItem('text_choix2')

document.getElementById("bouton_start2").addEventListener("click", () => {
    rotation('roulette2')
    document.getElementById("bouton_start2").style.display = "none"
    document.getElementById("bouton_retour2").style.display = "block"
  })

document.getElementById("bouton_retour2").addEventListener("click", () => {
    location.href = "./index.html"
  })
  
  function rotation(roue){
    document.getElementById(roue).classList = "tourne"
    random_number = Math.floor(Math.random() * (3000-1000-1)) + 1000
    console.log(random_number)
    setTimeout(() => {
        document.getElementById(roue).classList = "stop";
  },random_number)
    
  }