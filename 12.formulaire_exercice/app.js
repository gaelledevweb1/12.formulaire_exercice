const form = document.querySelector("form");
const name = document.querySelector("#name");

const email = document.querySelector("#Email");
const phone = document.querySelector("#phone");
const message = document.querySelector("#message");
const btn = document.querySelector("button");
const msgError = document.querySelectorAll(".error");
const button = document.querySelector("button");

console.log(form, name, email, phone, message, btn, msgError, button);

//  je détecte la validation du formulaire
form.addEventListener("submit", (e) => {
  //   la validation d'un  formulaire ordonne le rafraichissement de la page, il faut donc l'annuler pour pouvoir traiter au niveau du navigateur les données
  e.preventDefault();
  console.log("formulaire envoye");
  //   je vérife que les champs sont remplis
  const nameValue = name.value.trim(); //trim() permet de supprimer les espaces au debut et à la fin de la chaine de string 
  console.log(nameValue.length, "name");
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();
  const messageValue = message.value.trim();
  console.log(nameValue, phoneValue, emailValue, messageValue);
  //  Le reste du code ira ici

  //  Amélioration de l'espérience utilisateur
  //  tous les messages d'erreurs sont invisibles par defaut
  msgError.forEach((error) => {
    error.classList.add("invisible");
  });

  //     je  définis les regex
  const phoneregex = /^0[6-7]\d{8}$/;
  const emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //  je vérifie  les valeurs

  if (nameValue.length < 2 || nameValue.length > 10) {
    console.log("erreur sur le nom");
    name.nextElementSibling.classList.remove("invisible");
    //   le nextElementSibling  ce lit de bas en haut donc attention pour le label si tu veux le cibler tu va utiliser le 1er enfant.
    //  si il y a une erreur comme on a fait une structure if l'ordinateur va s'arreter des la 1ere erreur c'est pour ça que tu n'a pas les 3 erreurs en même temps ( si par exemple tu as voulu faire un test avec les  3 erreurs (prenom, nom et message) pour verifier)
  } else if (phoneregex.test(phoneValue) === false) {
    console.log("erreur sur le téléphone");
    phone.nextElementSibling.classList.remove("invisible"); //rend visible l'invisible
  } else if (emailregex.test(emailValue) === false) {
    console.log("erreur sur le mail");
    email.nextElementSibling.classList.remove("invisible");
  } else if (messageValue.length < 10 || messageValue.length > 100) {
    console.log("erreur sur le message");
    message.nextElementSibling.classList.remove("invisible");
  } else {
    console.log("succès");
    button.innerText = "votre message à bien été envoyé!";
    // form.remove();
  }
  //  pour éviter d'avoir des erreurs d' espacement (du a des espaces au debut et à la fin de la chaine de string) on utilise la méthode strim()
});
