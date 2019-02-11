/*Créer un formulaire qui demande le nom, le prénom, l'adresse mail et le numéro de téléphone de l'utilisateur.
Verifier que l'adresse mail est bien une adresse mail, vérifier que le numéro de téléphone ne comporte que des chiffres,
et que le nom et le prénom ne contiennent que des lettres ou des tirets.*/
$(function(){
  $('#submit').click(function(){
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var eMail = $('#eMail').val();
    var number = $('#number').val();
    var regexName = /^([A-Z]{1}[a-zÀ-ÖØ-öø-ÿ]+)([- ]{1}[A-Z]{1}[a-zÀ-ÖØ-öø-ÿ]+){0,1}$/;
    var regexEmail = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9]+[.]+[a-zA-Z]{2,}$/;
    var regexNumber = /^0[1-9]{1}[0-9]{8}$/;
//    console.log(firstName);
//    console.log(lastName);
//    console.log(eMail);
//    console.log(number);

    if(firstName.match(regexName) && lastName.match(regexName) && number.match(regexNumber) && eMail.match(regexEmail)){
      alert('Merci de votre participation');
    }else{
      alert('Attention, le nom et le prénom ne doivent contenir que des lettres a-z et -, le numéro de téléphone doit contenir dix chiffres et l\'adresse mail doit être conforme.');
    }
  });
});
